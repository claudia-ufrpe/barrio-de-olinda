# Pesquisa estética do Barrio — outubro de 2026

Por que as peças estavam ficando "iguais e genéricas" e o que muda daqui pra frente.

## 1. Diagnóstico

As peças até aqui repetiam sempre a mesma receita: fundo mostarda com gradiente, cartão marrom de cantos redondos, estrelinha vermelha e foto no meio. Essa receita é limpa, mas parece "template de aplicativo". Não tinha nada que dissesse **Olinda**, **Pernambuco** ou **gente que viveu as lutas de esquerda**. Faltava sotaque.

## 2. Público (revisado)

- Mais de 40 anos, de Olinda e da Região Metropolitana do Recife, de esquerda, valoriza a cultura pernambucana.
- Viu (ou fez) o Carnaval de ladeira, os bonecos gigantes, o manguebeat dos anos 90, as campanhas do PT desde 1989.
- Reconhece **cordel, xilogravura, azulejo, bandeirinha, frevo, maracatu, cartaz de lambe-lambe** como coisas *suas*, não como enfeite.
- Lê no celular, muitas vezes sem óculos: precisa de letra grande e contraste forte.

## 3. O que os estudos dizem (artigos)

| Achado | Fonte | Regra para o Barrio |
|---|---|---|
| Leitores mais velhos são mais sensíveis a baixo contraste e a fontes pouco otimizadas | [Beier, ATypI 2019](https://atypi.org/presentation/age-related-deficits-and-their-effects-on-reading/); [revisão sistemática, PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9376262/) | Nada de texto mostarda sobre mostarda ou creme sobre amarelo. Texto principal ≥ 90 px no story. |
| Para idosos funcionam letras com pouco contraste de traço e formas bem diferenciadas | Farias & Landim, *Estudos em Design* 2020 ([PDF](https://eed.emnuvens.com.br/design/article/download/892/414)) | Fontes grossas e abertas (Fraunces 900, Alfa Slab One, Josefin 700). Evitar letras finas. |
| Evitar texto longo todo em caixa alta; alinhar à esquerda; linhas curtas | [Manual de Acessibilidade em Redes Sociais, UFMG](https://www.ufmg.br//app/uploads/2025/09/Manual-de-Acessibilidade-Redes-Sociais-NAI-.pdf) | Caixa alta só em rótulos curtos ("SÁBADO · 16h"). Frases em caixa normal. |
| Para público mais velho, imagem parada costuma engajar mais que vídeo | [Estudo de ONGs de idosos na Espanha, UCM](https://docta.ucm.es/entities/publication/3846bc5b-b265-4127-890d-addfa547a7bd) | Toda peça tem versão parada forte. O vídeo serve de reforço, não de base. |
| Foto de comida nítida e reconhecível aumenta curtidas | [Journal of Business Research 2022](https://avesis.tedu.edu.tr/yayin/3b5bf6dd-8736-4e3e-a624-1882740af577/predicting-social-media-engagement-with-computer-vision-an-examination-of-food-marketing-on-instagram) | Prato grande e bem iluminado, nada de foto pequena em moldura. |
| Em 2026 o Instagram favorece conteúdo autêntico, carrosséis (mais salvamentos) e Reels; imagem estática perdeu alcance | [Social Insider 2026](https://www.socialinsider.io/pt/social-media-benchmarks/instagram); [mLabs](https://www.mlabs.com.br/blog/autenticidade); [Canaltech](https://canaltech.com.br/mercado/automacao-e-conteudo-autentico-8-tendencias-para-marcas-no-instagram-em-2026/) | Usar foto real da casa e das pessoas. Ter carrossel para cardápio e agenda. Menos "cara de propaganda". |

## 4. Referências de design que funcionam

| Referência | O que tem de bom | Como usar no Barrio |
|---|---|---|
| **J. Borges** e a xilogravura de cordel (Bezerros-PE) — fez a identidade da Bienal da UNE em Recife/Olinda com o farol de Olinda e a asa branca ([UERJ](https://www.esdi.uerj.br/en/projects/@relId/11353/@orderBy/name/@orderDir/desc); [Vermelho](https://vermelho.org.br/?p=266437)) | Traço grosso, preto e branco com uma ou duas cores, figura chapada, sol com rosto | `sol-xilogravura.svg`, `estrela-xilo.svg`, granulado `.xilo` |
| **Capas de cordel como sistema gráfico** — livro de Victor Yves, 2026 ([Diario de PE](https://www.diariodepernambuco.com.br/viver/2026/10/11726110-designer-lanca-livro-que-ressalta-sofisticacao-da-xilogravura-em-mais-de-500-capas-de-cordel.html)) | Papel creme, moldura de filete, título centralizado, gravura no alto | Linguagem **Cordel** (ver mostruário) |
| **Movimento Armorial** / Alfabeto Sertanejo de Ariano Suassuna, letras vindas dos ferros de marcar gado ([DAT Journal](https://datjournal.anhembi.br/dat/article/download/20/15); [UFPE](https://periodicos.ufpe.br/revistas/INV/article/view/230105)) | Une o popular e o erudito, símbolos heráldicos | Selos, cantoneiras e moldura de cordel; tom "nobre popular" |
| **Aloísio Magalhães** e O Gráfico Amador (Recife, 1954) ([Wikipedia](https://en.wikipedia.org/wiki/Alo%C3%ADsio_Magalh%C3%A3es)) | Design moderno brasileiro nascido no Recife, impressão artesanal | Composição limpa, poucos elementos, muito respiro |
| **Cartaz tipográfico de lambe-lambe** (Gráfica Fidalga, Recife) e **letreiro popular pernambucano** ([Intercom](https://portalintercom.org.br/anais/nordeste2015/expocom/EX47-0905-1.pdf); [UFPE](https://repositorio.ufpe.br/jspui/bitstream/123456789/47781/1/DESENVOLVIMENTO%20DE%20UMA%20TIPOGRAFIA%20DIGITAL.pdf)) | Letra grande, faixas de cor, só texto, lê-se de longe | Linguagem **Lambe-lambe**, fonte `--cartaz` (Alfa Slab One) |
| **Azulejaria de Olinda** (Convento de São Francisco, Igreja das Neves), padrões em tapete e cercadura ([UFG](https://revistas.ufg.br/reec/article/download/72247/39256/358122); [UFPE](https://repositorio.ufpe.br/jspui/bitstream/123456789/43291/1/BANKS%2c%20Raphaela.pdf)) | Módulos que se repetem, barras de cercadura | `--padrao` (já existia) + `cercadura-azulejo.svg` para barras |
| **Identidades do Carnaval de Olinda** 2025 (Raoni Assis: azulejo, grades de casarão, sombrinha, La Ursa) e 2026 (Ayodê França, manguebeat) ([Prefeitura](https://olinda.pe.gov.br/wp-content/uploads/2025/01/Release-Carnaval-2025.pdf); [Diario de PE](https://www.diariodepernambuco.com.br/amp/vida-urbana/2026/01/11705902-olinda-anuncia-o-tema-do-seu-carnaval-2026-ta-todo-mundo-aqui.html)) | Símbolos locais tratados com desenho contemporâneo | `sombrinha-frevo.svg`, `casario-olinda.svg` |
| **Manguebeat** — "uma antena parabólica enfiada na lama", caranguejo ([Wikipedia](https://en.wikipedia.org/wiki/Mangue_bit)) | Mistura de raiz e pop | Para noites de música autoral e rock/coco |
| **Maracatu rural** / caboclo de lança: gola de lantejoulas, cores saturadas ([Folha PE](https://www.folhape.com.br/cultura/caboclo-lanca-nazare-da-mata/470897/)) | Cor forte, brilho, textura | Pontos de brilho e cor só em datas de festa |
| **Volpi** e as bandeirinhas ([Phillips](https://www.phillips.com/detail/alfredo-volpi/104944/zh)) | Geometria simples, popular e moderna ao mesmo tempo | `bandeirinhas.svg` (o ano inteiro, não só no São João) |
| **Cartaz de resistência 1964–85** e **Ziraldo** ([Arcos Design](https://www.e-publicacoes.uerj.br/arcosdesign/article/view/86921); [Rolling Stone](https://rollingstone.com.br/guia-livro/ziraldo-em-cartaz/)) | Linguagem afetiva da esquerda: mão, estrela, povo junto | Estrela vermelha com traço de xilogravura em vez de estrela "de emoji" |

## 5. Perfis parecidos

A busca não encontrou perfis com análise publicada. Os nomes que aparecem nos guias de Olinda e servem de comparação (veja os perfis no Instagram antes de copiar qualquer coisa):

- **Bodega do Véio**, **Casa da Rabeca**, **Olinda Art & Grill**, **A Casa do Cachorro Preto** ([guia](https://www.queroviajarmais.com/noite-em-olinda/)) — casas de cultura popular, onde a agenda cultural é o post principal.
- **Bip Bip** (Copacabana) — boteco de samba que vive de foto real dos músicos e da roda, quase sem arte ([JB](https://www.jb.com.br/cadernob/cronicas/2024/12/1053354-bip-bip-o-bar-que-e-um-primeiro-lar.html)).
- **Museu do Mamulengo** de Olinda — o boneco como personagem.

Lição comum: **gente de verdade e o artista em destaque** valem mais que arte enfeitada.

## 6. As três linguagens do Barrio

A partir de agora, cada peça escolhe **uma** destas três linguagens (ver `mostruario/mostruario.png`). Cores, fontes e logo continuam os mesmos.

| Linguagem | Quando usar | Fundo | Título | Símbolo |
|---|---|---|---|---|
| **Cordel** | Música (forró, choro, samba, voz e violão), homenagens, datas | Papel creme com granulado | Fraunces 900, centralizado | Sol ou estrela de xilogravura, moldura de cordel |
| **Ladeira** | Festa, Carnaval, sábado, eventos grandes | Mostarda com azulejo | Fraunces 900, à esquerda | Bandeirinhas no topo, casario no pé, sombrinha |
| **Lambe-lambe** | Comida, promoções, aviso rápido | Papel creme | Alfa Slab One em faixas de cor | Cercadura de azulejo |

Ainda valem: foto real em tela cheia (quando houver vídeo ou foto boa) e o fundo marrom de noite.

### Regras novas
1. Uma linguagem por peça. Não misturar cordel, ladeira e lambe-lambe.
2. No máximo dois símbolos por peça (ex.: bandeirinhas + casario).
3. A estrela vermelha passa a ser preferencialmente a **estrela de xilogravura**, com traço marrom.
4. Fugir do cartão de cantos redondos como solução padrão. Usar filete, faixa reta ou moldura de cordel.
5. Contraste sempre marrom × creme ou marrom × mostarda. Vermelho só para destaque curto.
6. Frase de fechamento com sotaque, sem firula: "Bora pro Barrio", "Te espero na ladeira", "Chega mais".

## 7. Arquivos criados

- `marca/simbolos/` — bandeirinhas, sombrinha de frevo, sol de xilogravura, estrela de xilogravura, casario de Olinda, moldura de cordel, cercadura de azulejo.
- `marca/simbolos.css` — papel de cordel (`.papel`), granulado de xilogravura (`.xilo`), moldura, faixas e movimentos (bandeirinha balançando, sombrinha girando, sol girando).
- `marca/fontes/alfa-slab-one-*` — letra de cartaz de lambe-lambe (`var(--cartaz)`).
- `pesquisa/mostruario/` — um exemplo de cada linguagem.

## 8. Foto do Barrio no fundo

- Usar só fotos do próprio Barrio, como `fotos/fachada-barrio.jpg` (fachada amarela com arcos brancos). Cenas de rua ou da festa não servem, porque não mostram a casa.
- O fundo é sempre o amarelo do Barrio, que é a cor da própria fachada. A foto entra por cima bem clarinha (10–12%), escurecendo só um pouco, para aparecerem os arcos e janelas sem atrapalhar a leitura.
- Aprovado pela dona na peça da festa do Lula (27/10).

## Diagramação (regras de montagem)

Fontes: guias de área segura do Instagram (Meta) e princípios clássicos de grade (Müller-Brockmann, *Sistemas de grelhas*).

**Áreas seguras**
- **Story (1080×1920):** deixar livres os 200 px de cima (foto e nome do perfil) e os 170 px de baixo (caixa de resposta).
- **Reels (1080×1920):** a arte inteira fica na faixa central 4:5, de y=285 a y=1635. Esse é o recorte que aparece na grade do perfil, e fora dele ficam a legenda e o áudio. Os 150 px da direita ficam livres por causa dos botões de curtir e comentar. Só faixas de cor de ponta a ponta podem passar dessas margens.
- **WhatsApp e feed (1080×1350):** margem de pelo menos 36 px em todos os lados.

**Grade e alinhamento**
- Usar um eixo só: tudo centralizado (cartaz, lambe-lambe) ou tudo à esquerda (ladeira). Não misturar.
- Os blocos ficam empilhados de cima para baixo, e o espaço entre eles se repete igual. Nada fica solto em posição aleatória.
- Faixas de cor (título, data) vão de ponta a ponta. Elas dão ritmo e "seguram" o cartaz.

**Hierarquia (máximo 4 níveis)**
1. O assunto (LULA, nome do artista, prato): o maior da peça.
2. Quando (dia e hora): numa faixa de contraste.
3. Quem toca ou o que tem.
4. Couvert, logos e detalhes.

**Elementos decorativos**
- Estrelas e símbolos ficam **ao lado** do texto, na mesma linha, ou num espaço vazio. Nunca por trás de letras.
- Selos (como o "81 anos") ficam no canto de uma foto, sem cobrir texto nem faixa.
- A estrela de xilogravura é vermelha com contorno marrom, sem traços brancos.

**Contraste**
- Fundo claro (amarelo vivo, sem bordas escuras). A foto da fachada do Barrio entra a 10–12%.
- Texto em marrom, ou em branco com contorno marrom. Vermelho só em faixa, com texto claro por cima. Vermelho nunca vai como cor de letra sobre o amarelo.

## 9. Para melhorar depois

- Fotografar o casario, os azulejos e a fachada do próprio Barrio e usar no lugar dos desenhos.
- Pedir a um xilogravador de Olinda ou Bezerros uma matriz exclusiva do Barrio. Seria o símbolo mais forte possível.
- Pesquisar a fonte "Barzin" (letreiros de bares de Caruaru, UFPE) e a fonte Armorial para títulos.

## Atualização 29/10/2026
- A eleição passou: **sem vermelho e sem estrelas** nas peças, salvo pedido. Destaques em marrom, creme e amarelo claro.
- O **bege/creme como fundo** ficou "sem graça" para a dona: usar o **amarelo do Barrio** como fundo padrão nas três linguagens. O creme fica só em detalhes (molduras de foto, cartões pequenos).
- Barra de azulejo sem vermelho: `marca/simbolos/cercadura-azulejo-sem-vermelho.svg`.
