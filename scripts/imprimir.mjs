// Gera arquivos de gráfica para adesivos: PDF vetorial no tamanho real com sangria + PNG 600 dpi.
// Uso: node scripts/imprimir.mjs <arquivo.html> <largura_mm> <altura_mm> <forma: circulo|oval> [sangria_mm=2]
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [arq, wmm, hmm, forma, sg = "2"] = process.argv.slice(2);
const W = Number(wmm), H = Number(hmm), S = Number(sg);
const src = resolve(arq), saida = join(dirname(src), "exportado", "grafica");
mkdirSync(saida, { recursive: true });
const nome = basename(src, ".html");
const PX = 96 / 25.4; // px por mm no PDF

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(src).href);
await page.evaluate(() => document.fonts.ready);
const box = await page.locator(".peca").boundingBox();
const TW = (W + 2 * S) * PX, TH = (H + 2 * S) * PX;
await page.addStyleTag({ content: `
  html, body { margin: 0; background: transparent !important; width: ${TW}px; height: ${TH}px; overflow: hidden; }
  .sangria { position: fixed; inset: 0; background: #4a2a1a; border-radius: 50%; }
  .peca { position: fixed !important; left: ${S * PX}px; top: ${S * PX}px; transform-origin: 0 0;
          transform: scale(${(W * PX) / box.width}, ${(H * PX) / box.height}); background: transparent !important; }` });
await page.evaluate(() => { const d = document.createElement("div"); d.className = "sangria"; document.body.prepend(d);
  document.getAnimations().forEach((a) => { a.pause(); a.currentTime = 1500; }); });
await page.setViewportSize({ width: Math.ceil(TW), height: Math.ceil(TH) });
const pdf = join(saida, `${nome}-${W}x${H}mm-sangria${S}mm.pdf`);
await page.pdf({ path: pdf, width: `${W + 2 * S}mm`, height: `${H + 2 * S}mm`, printBackground: true, pageRanges: "1",
                 margin: { top: 0, right: 0, bottom: 0, left: 0 } });
const scale = 600 / 96;
const p2 = await browser.newPage({ deviceScaleFactor: scale, viewport: { width: Math.ceil(TW), height: Math.ceil(TH) } });
await p2.goto(pathToFileURL(src).href); await p2.evaluate(() => document.fonts.ready);
await p2.addStyleTag({ content: (await page.$eval("style:last-of-type", (s) => s.textContent)) });
await p2.evaluate(() => { const d = document.createElement("div"); d.className = "sangria"; document.body.prepend(d);
  document.getAnimations().forEach((a) => { a.pause(); a.currentTime = 1500; }); });
const png = join(saida, `${nome}-${W}x${H}mm-600dpi.png`);
await p2.screenshot({ path: png, omitBackground: true, clip: { x: 0, y: 0, width: TW, height: TH } });
await browser.close();
execFileSync("python3", ["-c", `from PIL import Image; im=Image.open(${JSON.stringify(png)}); im.save(${JSON.stringify(png)}, dpi=(600,600)); print(im.size)`], { stdio: "inherit" });
console.log(pdf); console.log(png);
