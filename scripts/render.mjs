// Gera PNG (quadro após a entrada) e MP4 (entrada de 1,5 s + microanimações até o fim) de cada peça.
// Uso: node scripts/render.mjs pecas/2026-10-19-dobradinha [segundos_totais]
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const pasta = resolve(process.argv[2] ?? ".");
const total = Number(process.argv[3] ?? 15); // 15 s = duração de um story
const FPS = 30;
const ANIM = 1.5;
const saida = join(pasta, "exportado");
mkdirSync(saida, { recursive: true });

const browser = await chromium.launch();
for (const arq of readdirSync(pasta).filter((f) => f.endsWith(".html"))) {
  const nome = arq.replace(/\.html$/, "");
  const page = await browser.newPage();
  await page.goto(pathToFileURL(join(pasta, arq)).href);
  await page.evaluate(() => document.fonts.ready);
  const peca = page.locator(".peca");
  const { width, height } = await peca.boundingBox();
  await page.setViewportSize({ width: Math.round(width), height: Math.round(height) });
  await page.evaluate(() => document.getAnimations().forEach((a) => a.pause()));

  const quadros = join(saida, `.${nome}-quadros`);
  rmSync(quadros, { recursive: true, force: true });
  mkdirSync(quadros);
  const vai = (t) => page.evaluate((ms) => document.getAnimations().forEach((a) => (a.currentTime = ms)), t * 1000);
  const n = Math.round(total * FPS);
  for (let i = 0; i < n; i++) {
    await vai(i / FPS);
    await peca.screenshot({ path: join(quadros, `${String(i).padStart(4, "0")}.jpg`), type: "jpeg", quality: 95 });
  }
  await vai(ANIM);
  await peca.screenshot({ path: join(saida, `${nome}.png`) });

  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(quadros, "%04d.jpg"),
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "16", "-movflags", "+faststart",
    join(saida, `${nome}.mp4`),
  ]);
  rmSync(quadros, { recursive: true, force: true });
  console.log(`${nome}: ${saida}/${nome}.png e ${nome}.mp4`);
  await page.close();
}
await browser.close();
