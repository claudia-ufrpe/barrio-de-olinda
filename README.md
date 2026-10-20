# Barrio Café e Bar — Stories e posts

Peças para o Instagram do Barrio (Olinda-PE).

## Identidade visual
- **Cores:** mostarda Dijon `#c7870f` (fundo), marrom `#4a2a1a` (títulos e faixa), marrom médio `#7a4528`, creme `#f6ecd6`, vermelho `#c4271c` (só nas estrelinhas `.estrela`).
- **Fontes:** Fraunces (títulos) e Josefin Sans (textos), em `marca/fontes`.
- **Base comum:** `marca/barrio.css`. Logo sem fundo em `marca/logo`.
- **Formatos:** story 1080×1920, post 1080×1350 (4:5).
- **Animação:** suave, no máximo 1,5 s. Todo texto já aparece no primeiro quadro (nada começa invisível). Depois a imagem fica parada.
- **Texto:** frases curtas, letra grande, linguagem direta.

## Como gerar
```
npm install
npm run render -- pecas/2026-10-19-dobradinha
```
Gera em `exportado/` um PNG (imagem final) e um MP4 de 6 s (animação + imagem parada) para cada `.html` da pasta.

Para uma nova peça, copie uma pasta de `pecas/`, troque foto e textos e rode o comando.
