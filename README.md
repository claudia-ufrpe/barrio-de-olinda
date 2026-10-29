# Barrio Café e Bar — Stories e posts

Peças para o Instagram do Barrio (Olinda-PE).

## Identidade visual
- **Cores:** mostarda viva `#e2a210` (fundo), marrom `#4a2a1a` (títulos e faixa), marrom médio `#7a4528`, creme `#f6ecd6`, vermelho `#c4271c` (só nas estrelinhas `.estrela`).
- **Fontes:** Fraunces (títulos) e Josefin Sans (textos), em `marca/fontes`.
- **Base comum:** `marca/barrio.css`. Logo sem fundo em `marca/logo`.
- **Formatos:** story 1080×1920, post 1080×1350 (4:5).
- **Animação:** suave, no máximo 1,5 s. Todo texto já aparece no primeiro quadro (nada começa invisível). Depois seguem microanimações suaves até o fim (estrelas, foto, fundo, selo, brilho da faixa); o texto fica parado.
- **Texto:** frases curtas, letra grande, linguagem direta.

## Vídeo da casa dentro da peça
Um elemento com `data-video="../../videos/arquivo.mp4"` recebe o vídeo (com áudio), com cantos arredondados. Corte o trecho antes em `videos/` com 15 s.
Peça com `data-estatico` na `.peca` (ex.: WhatsApp) gera só a imagem.

## Como gerar
```
npm install
npm run render -- pecas/2026-10-19-dobradinha
```
Gera em `exportado/` um PNG (imagem final) e um MP4 de 15 s (duração de um story) (animação + imagem parada) para cada `.html` da pasta.

Para uma nova peça, copie uma pasta de `pecas/`, troque foto e textos e rode o comando.

## Pesquisa estética e símbolos pernambucanos
Veja `pesquisa/estetica.md` (público, estudos, referências, as três linguagens Cordel / Ladeira / Lambe-lambe) e o mostruário em `pesquisa/mostruario/mostruario.png`. Símbolos prontos em `marca/simbolos/` com estilos em `marca/simbolos.css`.

## Variar sempre
O que fica fixo: cores, fontes, padrão de azulejo, logo e estrelinhas.
O que muda de uma peça para outra: o layout e a frase de fechamento. Não repetir o mesmo layout nem o "Vem almoçar no Barrio" em dias seguidos.

| Peça | Layout | Fechamento |
|---|---|---|
| 2026-10-19 dobradinha | foto em moldura no centro, faixa marrom embaixo | "Vem almoçar no Barrio" |
| 2026-10-20 enquete | duas fotos cheias, faixa diagonal com espaço para a enquete | (sem faixa; enquete) |
| 2026-10-22 pandeirada | story: vídeo em tela cheia com etiqueta "Hoje 19h" e cartão embaixo; WhatsApp: foto em pé + cartões | couvert + endereço |
| 2026-10-23 sexta retrô | DJ recortado na frente de um disco de vinil girando, raios retrô, faixa de 3 cartões (data/hora/couvert) | sem frase; só as informações |
| 2026-10-24 fino do samba | fundo marrom (noite), arco mostarda tipo palco com o cantor recortado, letras creme | "Samba, boa música e gente boa" |
| 2026-10-27 festa do Lula | Lambe-lambe de militância: faixa vermelha LULA, foto colada com fita, selo 81 anos, fachada do Barrio sutil no fundo amarelo | Som na Rural com a Orquestra de Babá e convidados |
| 2026-10-27 tá lindo | Ladeira: bandeirinhas, título grande à esquerda, duas fotos reais da festa coladas como retrato | "Tá lindo!" |
| 2026-10-27 som na rural | Cordel sobre vídeo: vídeo real da noite em tela cheia com som, dois cartões de papel com moldura de cordel (em cima e embaixo) | logos Som na Rural + Barrio |
| 2026-10-29 dobradinha | Lambe-lambe de comida: TEM em vermelho, faixa marrom DOBRADINHA, foto colada com fita, barra de azulejo | "Bora almoçar?" |

Microanimações (desde 2026-10-20): estrelas pulsando e girando, foto se aproximando devagar, fundo deslizando, selo balançando, brilho na faixa a cada 4,5 s.
