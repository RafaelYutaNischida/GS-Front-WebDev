# Uso de Inteligência Artificial

Este arquivo documenta como as ferramentas de IA foram usadas no projeto **Ponto Fresco**.

Os prompts estão copiados exatamente como foram enviados, inclusive com erros de digitação. As respostas aparecem como **resumo** ou como **trecho**, conforme indicado em cada item.

## 1. Ferramentas utilizadas

| Ferramenta | Finalidade |
|---|---|
| **Claude (Anthropic)** | Escolher o problema do tema, explicar o passo a passo do projeto, gerar a base inicial do código (componentes, hooks, service, utils), diagnosticar o erro 404 da API, sugerir o nome do projeto, ajudar a preencher a Ficha do README e revisar o repositório |
| **GitHub Copilot (integrado ao editor)** | Criar a logo e o favicon em SVG e refatorar o visual do site com a paleta da marca |

## 2. Interações realizadas

### 2.1 Escolha do problema (Claude)

**Prompt:**
> me de algum exemplo de problema em SP que é relacionado ao trabalho

**Resumo da resposta:** sugeriu o problema do calor extremo para trabalhadores de rua e idosos, com a frase do problema para a Ficha, a ligação com cada disciplina e os ODS 3, 11 e 13. Alertou que o grupo precisa validar o problema conversando com uma pessoa real.

### 2.2 Passo a passo do Front-end (Claude)

**Prompt:**
> Certo com base nesse tema que você trouxe, vou fazer o de Web / Front-end (CRUD) não precisa me dar o codigo por enquanto, mas queria que me ensinasse passo a passo de como fazer o projeto e me explicando como se você fosse um professor ensinando eu, também quero que me diga quais são as ferramentas como usar cada uma, e por último o jeito que os arquivos devem ficar organizados no vscode

**Resumo da resposta:** explicou as ferramentas (Node.js, VS Code, Git, GitHub, Vite, React, Tailwind, MockAPI e Vercel), as três camadas do projeto (visual, lógica e dados), os 12 passos de construção e a estrutura de pastas.

### 2.3 Criação da API (Claude)

**Prompt:**
> como eu crio a API no MockAPI

**Resumo da resposta:** passo a passo para criar conta, projeto e o recurso `pontos`, testar o `GET` no navegador e testar o CRUD completo.

### 2.4 Geração do projeto (Claude)

**Prompt** (com o print da estrutura de pastas e o link do projeto no MockAPI anexados):
> quero que me traga agora a estrutura de cada arquivo, monte o projeto

**Resumo da resposta:** projeto em Vite, React e Tailwind com 11 componentes, 3 custom hooks, `pontosService.js`, utilitários, README e modelo do AI.md. Esta foi a base do código do repositório.

### 2.5 Erro 404 na API (Claude)

**Prompts:**
> como faço pra API funcionar

> ta dando o erro 404, eu estou colocando no VITE_API_URL=https://6af2400542c6561ced3924ba.mockapi.io/api/v1/pontos mas n está indo e continua o erro 404

**Resumo da resposta:** explicou que o código já acrescenta `/pontos`, então a URL no `.env` deve terminar em `/v1`. Depois de ver os dados reais da API, a IA adaptou o projeto aos campos que existiam naquele momento.

### 2.6 Dúvidas sobre o enunciado e a Ficha (Claude)

**Prompts:**
> o trabalho diz para usar next.js ou vite, onde eles estao sendo utilizados

> fale o nome, tipo um titulo envolvendo o tema

> prenche para mim, de acordo com cada materia pede

> deixa mais resumido

> isso seria o que, e eu devo preencher? se sim, preencho com oq

**Resumo das respostas:** indicou os arquivos que comprovam o uso do Vite, sugeriu nomes (o grupo escolheu **Ponto Fresco**), redigiu o campo "O que cada parte faz" e explicou como escolher um indicador de impacto que o projeto consegue medir.

### 2.7 Logo e favicon (GitHub Copilot)

**Prompt:**
> quero que adicione na pasta public/ uma logo.png e um favicon.ico, quero que faça em formato SVG, de acordo com a estrutura de cada um abaixo
>
> Logo Geométrico e Abstrato: "O Arco do Pôr do Sol"
>
> - Conceito: Um semicírculo (representando a sombra ou um sombreiro/guarda-sol estilizado) posicionado sobre ondas d'água minimalistas (duas ou três linhas suaves).
> - Formas: Formas geométricas limpas e simétricas, fáceis de aplicar em carimbos, bordados e ícones de app.
> - Cores: Tons terrosos (terracota ou amarelo-areia) para a sombra/topo e azul-marinho para a água.
> - Tipografia: Serifada elegante e relaxada (ex: Playfair Display, Cinzel).
> - Vibe: Acolhedora, artesanal, pousada pé na areia ou marca de bem-estar.
>
> O Favicon "Arco sobre Onda"
>
> - A Adaptação: Use o ícone completo da logo (o semicírculo acima das ondas) como o favicon, mas remova completamente o texto da marca para dar máximo espaço ao símbolo. O símbolo deve ser centralizado e ocupar o maior tamanho possível dentro do quadrado de 16x16 pixels.
> - Por que funciona: As formas geométricas são fáceis de reconhecer mesmo quando muito pequenas. O contraste entre o semicírculo (terracota/areia) e as ondas (azul-marinho) cria uma separação visual clara, facilitando a identificação imediata na aba do navegador.
> - Cores: Mantenha as cores originais da logo — o arco terracota e as ondas azul-marinho. Para maior visibilidade em navegadores com fundo escuro, certifique-se de que o favicon tenha um fundo transparente, ou adicione uma borda sutil e clara ao redor de todo o símbolo.

**Trecho da resposta:**
> Os arquivos vetoriais já estão no lugar. Como o pedido também cita explicitamente os nomes logo.png e favicon.ico, estou checando se há um conversor disponível para gerar esses binários de verdade a partir da arte SVG, em vez de entregar arquivos com extensão enganosa.

### 2.8 Identidade visual (GitHub Copilot)

**Prompt:**
> Atue como um designer UI/UX e desenvolvedor frontend especialista em CSS/Tailwind. Quero refatorar o design do meu site para que ele fique moderno, harmonioso e totalmente alinhado com a identidade visual da minha logo.
>
> Aqui estão os dados exatos da paleta de cores extraída da minha marca:
> - Cor Primária (Terracota / Pôr do Sol): #CF6D4E
> - Cor Secundária (Azul-Marinho / Água): #1B3F5E
> - Fundo Escuro (Dark Mode): #141414
> - Fundo Claro / Apoio: #F4F1EA ou #FFFFFF
> - Texto de Alto Contraste: #FFFFFF ou #141414
>
> Por favor, reestruture o CSS do projeto aplicando as seguintes diretrizes de design:
>
> 1. Hierarquia de Cores e Contraste:
>    - Use o Azul-Marinho (#1B3F5E) para títulos principais (headings), navbar ou elementos estruturais fortes.
>    - Use o Terracota (#CF6D4E) para botões de ação (Call to Action / CTAs), destaques, badges e estados de hover para dar vida à interface.
>    - Garanta que a relação de contraste entre texto e fundo siga as normas de acessibilidade (WCAG).
>
> 2. Tipografia e Estilo:
>    - Defina fontes elegantes que combinem com o tom "Sombra, Água e Descanso". Sugira fontes do Google Fonts (ex: serifada elegante como 'Playfair Display' para títulos e sans-serif limpa como 'Inter' ou 'Montserrat' para o corpo).
>
> 3. Refinamento Visual (UI Kit):
>    - Aplique um design moderno com espaçamentos generosos (padding/margin), bordas levemente arredondadas (`border-radius: 8px` a `12px`) e sombras sutis para dar profundidade aos cards.
>    - Adicione transições suaves em botões e links (`transition: all 0.3s ease`).
>
> Por favor, forneça:
> 1. As variáveis CSS (ou configuração do Tailwind/theme) atualizadas com essa nova paleta.
> 2. Exemplos de estilização para o Header, Botões principais/secundários e Cards do site.

**Trecho da resposta:**
> Refatorei o tema usando terracota para CTAs, azul-marinho para estrutura e títulos, e fundo claro. Os tokens estão em index.css, incluindo a cor de fundo escuro; Lora foi aplicada aos títulos e Atkinson Hyperlegible mantida no corpo do texto.
>
> Atualizei o Header, os botões e os cards, além das cores dos badges em constantes.js. A fonte Lora foi adicionada em index.html.
>
> Validei o contraste dos principais pares: texto no CTA terracota 5,22:1, no hover 4,58:1 e texto branco no header marinho 10,94:1. npm run build passou e não foram encontrados erros nos arquivos alterados.

## 3. Aplicação no projeto

- **Estrutura e arquitetura:** divisão em camadas (`components`, `hooks`, `services`, `pages` e `utils`), sugerida e gerada pela IA.
- **Código inicial:** componentes, custom hooks (`usePontos`, `usePontoForm` e `useFiltros`), service de CRUD, validações e a lógica do alerta de calor.
- **Adaptação à API:** a camada de serviço converte os campos antigos da API para o formato da tela (`descricao` para `observacoes`, `ativo` para `aberto`, bairro extraído do `endereco`). *(Confirmem quem escreveu essa função, Claude, Copilot ou o grupo, e ajustem esta linha.)*
- **Identidade visual:** logo, favicon, paleta de cores e tipografia (Copilot).
- **Ajustes feitos pelo grupo no repositório:** mensagem de aviso para registros sem ID no `PontoCard`, uso da logo no `Header` e ajustes nos dados da API. *(Confirmem o que foi feito à mão e o que veio da IA.)*
- **Correção de bug:** o tipo `bebedouro` passou a ser tratado como "Água" em `utils/constantes.js`.
- **Documentação:** modelo do README e da Ficha da CitizenTech.

## 4. Validação das respostas

- Rodamos `npm run build` e o projeto compila sem erros.
- O erro 404 foi encontrado ao testar a URL da API no navegador e foi corrigido tirando `/pontos` do `.env`.
- Ao comparar o código com os dados reais da API, vimos que os campos eram diferentes dos que a IA tinha suposto, e adaptamos o código.
- Na revisão, o tipo `bebedouro` foi testado isoladamente e confirmado como corrigido.
- *(Acrescentem aqui só o que realmente fizeram: testes de criar, editar e excluir no site, conferência no painel do MockAPI, teste no celular.)*

## 5. Análise crítica

**Benefícios:** a IA acelerou a montagem da estrutura, explicou a separação em camadas e ajudou a achar o erro 404 com rapidez. O Copilot permitiu criar a identidade visual sem precisar de um designer.

**Limitações:** a IA gerou o primeiro código supondo campos que não existiam na nossa API, o que exigiu retrabalho. Também deixou passar o caso do tipo `bebedouro`, que só apareceu numa revisão. Na logo, o Copilot não entregou os formatos PNG e ICO que pedimos.

**Dificuldades:** entender onde cada responsabilidade deve ficar (componente, hook ou service) e perceber que a IA pode errar de forma discreta. Por isso, tivemos que ler o código gerado e testar com os dados reais, em vez de confiar na primeira resposta.