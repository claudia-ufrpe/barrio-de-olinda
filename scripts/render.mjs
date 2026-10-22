// Gera PNG (quadro após a entrada) e MP4 (entrada de 1,5 s + microanimações até o fim) de cada peça.
// Uso: node scripts/render.mjs pecas/2026-10-19-dobradinha [segundos_totais]
// - .peca com data-estatico: gera só o PNG (ex.: post de WhatsApp).
// - elemento com data-video="caminho.mp4": o vídeo é encaixado nesse espaço (com o áudio dele).
//   Com data-atras, o vídeo fica atrás de tudo (texto e estrelas por cima).
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
  const vai = (t) => page.evaluate((ms) => document.getAnimations().forEach((a) => (a.currentTime = ms)), t * 1000);

  if (await page.$(".peca[data-estatico]")) {
    await vai(ANIM);
    await peca.screenshot({ path: join(saida, `${nome}.png`) });
    console.log(`${nome}: ${saida}/${nome}.png`);
    await page.close();
    continue;
  }

  const videos = await page.$$eval("[data-video]", (els) => els.map((e) => {
    const r = e.getBoundingClientRect();
    return { src: e.dataset.video, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height),
             raio: parseFloat(getComputedStyle(e).borderTopLeftRadius) || 0, atras: e.hasAttribute("data-atras") };
  }));
  const atras = videos.length && videos[0].atras;
  if (atras) await page.addStyleTag({ content: "html, body, .peca { background: transparent !important; }" });

  const quadros = join(saida, `.${nome}-quadros`);
  rmSync(quadros, { recursive: true, force: true });
  mkdirSync(quadros);
  const n = Math.round(total * FPS);
  for (let i = 0; i < n; i++) {
    await vai(i / FPS);
    const q = join(quadros, String(i).padStart(4, "0"));
    if (atras) await peca.screenshot({ path: `${q}.png`, omitBackground: true });
    else await peca.screenshot({ path: `${q}.jpg`, type: "jpeg", quality: 95 });
  }
  await vai(ANIM);
  await peca.screenshot({ path: join(saida, `${nome}.png`) });

  const mp4 = join(saida, `${nome}.mp4`);
  if (atras) {
    const v = videos[0];
    const filtro =
      `[0:v]fps=${FPS},scale=${v.w}:${v.h}:force_original_aspect_ratio=increase,crop=${v.w}:${v.h},setsar=1,` +
      `pad=${Math.round(width)}:${Math.round(height)}:${v.x}:${v.y}[v];[v][1:v]overlay=0:0:shortest=1,format=yuv420p[o]`;
    execFileSync("ffmpeg", [
      "-y", "-loglevel", "error", "-t", String(total), "-i", resolve(pasta, v.src),
      "-framerate", String(FPS), "-i", join(quadros, "%04d.png"),
      "-filter_complex", filtro, "-map", "[o]", "-map", "0:a?",
      "-c:v", "libx264", "-crf", "16", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", mp4,
    ]);
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", String(ANIM), "-i", mp4, "-frames:v", "1", join(saida, `${nome}.png`)]);
  } else execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(quadros, "%04d.jpg"),
    "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "16", "-movflags", "+faststart", mp4,
  ]);
  if (videos.length && !atras) {
    const v = videos[0];
    const src = resolve(pasta, v.src);
    const base = join(quadros, "base.mp4");
    execFileSync("mv", [mp4, base]);
    const R = Math.round(v.raio);
    const mascara = `color=white:s=${v.w}x${v.h}:r=${FPS},format=gray,geq=lum=255*lte(hypot(max(0\\,abs(X-W/2)-(W/2-${R}))\\,max(0\\,abs(Y-H/2)-(H/2-${R})))\\,${R})`;
    const filtro =
      `[1:v]fps=${FPS},scale=${v.w}:${v.h}:force_original_aspect_ratio=increase,crop=${v.w}:${v.h},setsar=1,format=rgba[v];` +
      `${mascara}[m];[v][m]alphamerge[vm];[0:v][vm]overlay=${v.x}:${v.y}:shortest=1,format=yuv420p[o]`;
    execFileSync("ffmpeg", [
      "-y", "-loglevel", "error", "-i", base, "-t", String(total), "-i", src,
      "-filter_complex", filtro, "-map", "[o]", "-map", "1:a?",
      "-c:v", "libx264", "-crf", "16", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", mp4,
    ]);
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-ss", String(ANIM), "-i", mp4, "-frames:v", "1", join(saida, `${nome}.png`)]);
  }
  rmSync(quadros, { recursive: true, force: true });
  console.log(`${nome}: ${saida}/${nome}.png e ${nome}.mp4`);
  await page.close();
}
await browser.close();
