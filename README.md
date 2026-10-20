# Barrio Café e Bar — Stories e posts

Peças para o Instagram do Barrio (Olinda-PE).

## Identidade visual
- **Cores:** mostarda viva `#e2a210` (fundo), marrom `#4a2a1a` (títulos e faixa), marrom médio `#7a4528`, creme `#f6ecd6`, vermelho `#c4271c` (só nas estrelinhas `.estrela`).
- **Fontes:** Fraunces (títulos) e Josefin Sans (textos), em `marca/fontes`.
- **Base comum:** `marca/barrio.css`. Logo sem fundo em `marca/logo`.
- **Formatos:** story 1080×1920, post 1080×1350 (4:5).
- **Animação:** suave, no máximo 1,5 s. Todo texto já aparece no primeiro quadro (nada começa invisível). Depois seguem microanimações suaves até o fim (estrelas, foto, fundo, selo, brilho da faixa); o texto fica parado.
- **Texto:** frases curtas, letra grande, linguagem direta.

## Como gerar
```
npm install
npm run render -- pecas/2026-10-19-dobradinha
```
Gera em `exportado/` um PNG (imagem final) e um MP4 de 15 s (duração de um story) (animação + imagem parada) para cada `.html` da pasta.

Para uma nova peça, copie uma pasta de `pecas/`, troque foto e textos e rode o comando.

## Variar sempre
O que fica fixo: cores, fontes, padrão de azulejo, logo e estrelinhas.
O que muda de uma peça para outra: o layout e a frase de fechamento. Não repetir o mesmo layout nem o "Vem almoçar no Barrio" em dias seguidos.

| Peça | Layout | Fechamento |
|---|---|---|
| 2026-10-19 dobradinha | foto em moldura no centro, faixa marrom embaixo | "Vem almoçar no Barrio" |
| 2026-10-20 enquete | duas fotos cheias, faixa diagonal com espaço para a enquete | (sem faixa; enquete) |

Microanimações (desde 2026-10-20): estrelas pulsando e girando, foto se aproximando devagar, fundo deslizando, selo balançando, brilho na faixa a cada 4,5 s.
