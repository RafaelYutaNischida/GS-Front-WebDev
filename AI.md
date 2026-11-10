# Uso de Inteligência Artificial

> **Atenção, equipe:** este arquivo precisa refletir as interações **reais** do grupo.
> Os trechos abaixo são um ponto de partida. Substituam os exemplos pelos prompts
> que vocês realmente enviaram e testem tudo antes de entregar.

## 1. Ferramentas utilizadas

| Ferramenta | Finalidade |
| **Claude (Anthropic)** | Me dê algum exemplo de problema em SP que é relacionado ao tema do trabalho (pdf da GS)|

| **Claude (Anthropic)** | Certo com base nesse tema que você trouxe, vou fazer o de Web / Front-end (CRUD) não precisa me dar o codigo por enquanto, mas queria que me ensinasse passo a passo de como fazer o projeto e me explicando como se você fosse um professor ensinando eu, também quero que me diga quais são as ferramentas como usar cada uma, e por último o jeito que os arquivos devem ficar organizados no vscode |

| **Copilot integrado** | Quero que adicione na pasta public/ uma logo.png e um favicon.ico, quero que faça em formato SVG, de acordo com a estrutura de cada um abaixo

Logo Geométrico e Abstrato: "O Arco do Pôr do Sol"

- Conceito: Um semicírculo (representando a sombra ou um sombreiro/guarda-sol estilizado) posicionado sobre ondas d'água minimalistas (duas ou três linhas suaves).
- Formas: Formas geométricas limpas e simétricas, fáceis de aplicar em carimbos, bordados e ícones de app.
- Cores: Tons terrosos (terracota ou amarelo-areia) para a sombra/topo e azul-marinho para a água.
- Tipografia: Serifada elegante e relaxada (ex: Playfair Display, Cinzel).
- Vibe: Acolhedora, artesanal, pousada pé na areia ou marca de bem-estar.

O Favicon "Arco sobre Onda"

- A Adaptação: Use o ícone completo da logo (o semicírculo acima das ondas) como o favicon, mas remova completamente o texto da marca para dar máximo espaço ao símbolo. O símbolo deve ser centralizado e ocupar o maior tamanho possível dentro do quadrado de 16x16 pixels.
- Por que funciona: As formas geométricas são fáceis de reconhecer mesmo quando muito pequenas. O contraste entre o semicírculo (terracota/areia) e as ondas (azul-marinho) cria uma separação visual clara, facilitando a identificação imediata na aba do navegador.
- Cores: Mantenha as cores originais da logo — o arco terracota e as ondas azul-marinho. Para maior visibilidade em navegadores com fundo escuro, certifique-se de que o favicon tenha um fundo transparente, ou adicione uma borda sutil e clara ao redor de todo o símbolo. |

| **Copilot integrado** | Atue como um designer UI/UX e desenvolvedor frontend especialista em CSS/Tailwind. Quero refatorar o design do meu site para que ele fique moderno, harmonioso e totalmente alinhado com a identidade visual da minha logo.

Aqui estão os dados exatos da paleta de cores extraída da minha marca:
- Cor Primária (Terracota / Pôr do Sol): #CF6D4E
- Cor Secundária (Azul-Marinho / Água): #1B3F5E
- Fundo Escuro (Dark Mode): #141414
- Fundo Claro / Apoio: #F4F1EA ou #FFFFFF
- Texto de Alto Contraste: #FFFFFF ou #141414

Por favor, reestruture o CSS do projeto aplicando as seguintes diretrizes de design:

1. Hierarquia de Cores e Contraste:
   - Use o Azul-Marinho (#1B3F5E) para títulos principais (headings), navbar ou elementos estruturais fortes.
   - Use o Terracota (#CF6D4E) para botões de ação (Call to Action / CTAs), destaques, badges e estados de hover para dar vida à interface.
   - Garanta que a relação de contraste entre texto e fundo siga as normas de acessibilidade (WCAG).

2. Tipografia e Estilo:
   - Defina fontes elegantes que combinem com o tom "Sombra, Água e Descanso". Sugira fontes do Google Fonts (ex: serifada elegante como 'Playfair Display' para títulos e sans-serif limpa como 'Inter' ou 'Montserrat' para o corpo).

3. Refinamento Visual (UI Kit):
   - Aplique um design moderno com espaçamentos generosos (padding/margin), bordas levemente arredondadas (`border-radius: 8px` a `12px`) e sombras sutis para dar profundidade aos cards.
   - Adicione transições suaves em botões e links (`transition: all 0.3s ease`).

Por favor, forneça:
1. As variáveis CSS (ou configuração do Tailwind/theme) atualizadas com essa nova paleta.
2. Exemplos de estilização para o Header, Botões principais/secundários e Cards do site.

## 2. Interações realizadas

**Prompt 1**
> Me dê algum exemplo de problema em SP que é relacionado ao tema do trabalho (pdf da GS)

**Resposta obtida:**
Exemplo de problema real em SP
Calor extremo para trabalhadores de rua e idosos

O problema: nos dias mais quentes, quem trabalha na rua (entregadores, ambulantes, garis, agentes de trânsito) e idosos que moram sozinhos ficam expostos ao calor sem saber onde há sombra, água ou local para descansar. O risco é desidratação, mal-estar e até internação.

Quem convive com ele (cidadão real): um motoboy ou entregador que trabalha na região da Av. Paulista, ou uma pessoa idosa do seu bairro. Esse é o tipo de pessoa com quem o briefing pede que vocês conversem (páginas 7 e 19).

Frase do problema (como pede a Ficha):
“Trabalhadores de rua e idosos na região da Paulista não sabem onde encontrar sombra e hidratação nos dias de calor extremo e ficam expostos a riscos de saúde.”

Como ele se conecta com as disciplinas
Python (Lógica)	Menu que registra temperatura e pontos de apoio em JSON, e classifica o risco (normal, atenção, perigo)
Sensor (Edge/ESP32)	Sensor de temperatura e umidade num ponto de ônibus, que acende LED e toca buzzer conforme o nível de calor, mesmo offline
Matemática	Modelar como a temperatura sobe ao longo do dia (derivada = taxa de aquecimento, integral = exposição acumulada)
Web / Front-end	Página com lista de pontos de sombra e hidratação, com cadastro, edição e exclusão (CRUD)
Experiência	Requisitos, casos de uso e protótipo pensados para quem tem pouco tempo e celular simples
Pitch	História de um entregador num dia de 38 °C

ODS possíveis: 3 (Saúde e bem-estar), 11 (Cidades sustentáveis), 13 (Ação contra a mudança do clima).

Outras ideias rápidas
Chuva e encostas: alerta de chuva forte com sensor de nível de córrego para moradores de áreas de risco
Calçadas acessíveis: mapa colaborativo de calçadas com buracos ou sem rampa para cadeirantes e idosos
Zeladoria do bairro: registro e acompanhamento de poste apagado ou buraco pelos próprios moradores
Transporte público: informação de lotação e atraso em estações de trem e metrô

Esse tema do calor funciona bem porque encaixa naturalmente em todas as disciplinas, inclusive no sensor, que pede decisão local mesmo sem internet. Mas lembre: o briefing pede que o problema venha de algo que vocês observem e conversem com alguém, então use isso como inspiração e valide com uma pessoa real.


**Prompt 2**
>Certo com base nesse tema que você trouxe, vou fazer o de Web / Front-end (CRUD) não precisa me dar o codigo por enquanto, mas queria que me ensinasse passo a passo de como fazer o projeto e me explicando como se você fosse um professor ensinando eu, também quero que me diga quais são as ferramentas como usar cada uma, e por último o jeito que os arquivos devem ficar organizados no vscode

**Resposta obtida:**
Aula: construindo o Web / Front-end da sua CitizenTech

Vou te guiar como se estivéssemos numa aula. Sem código por enquanto: o foco é você entender o que fazer, em que ordem e por quê.

Lembrando o que o briefing pede (páginas 40 a 42 e 59 a 61): React com Next.js ou Vite, Tailwind CSS, no mínimo 8 componentes, useState e useEffect, no mínimo 2 custom hooks, separação de responsabilidades, API externa com CRUD completo, no mínimo 15 commits, README.md, AI.md, repositório GitHub privado, ZIP e link de deploy.

Parte 1: As ferramentas

Node.js
É o que permite rodar JavaScript fora do navegador e traz o npm, o gerenciador de pacotes. Sem ele, nada do resto funciona.

Baixe a versão LTS em nodejs.org e instale.
Teste no terminal: node -v e npm -v. Se aparecerem números de versão, está pronto.

VS Code
Seu editor de código. Extensões úteis: ES7+ React Snippets (atalhos), Tailwind CSS IntelliSense (autocompleta classes), Prettier (formata o código) e ESLint (avisa de erros).

Git
Controla o histórico do projeto. Cada “commit” é uma foto do código num momento. O briefing exige no mínimo 15 commits significativos, então vá commitando conforme avança.

Comandos que você vai usar: git init, git add ., git commit -m "mensagem", git push.

GitHub
Site onde fica o repositório online. O briefing pede repositório privado e que você dê acesso de escrita aos professores (confirme que eles conseguem abrir). Em Settings > Collaborators você adiciona cada um.

Vite (recomendo no lugar do Next.js)
Ferramenta que cria e roda o projeto React. É mais simples e rápida de aprender, e o briefing aceita os dois. Next.js faz mais coisas (rotas no servidor, etc.), mas para um primeiro ano o Vite resolve com menos complicação.

Cria o projeto com npm create vite@latest, escolhendo React.
Roda em desenvolvimento com npm run dev.

React
Biblioteca para montar a interface em componentes: pedaços reutilizáveis de tela (um botão, um card, um formulário). Pense em peças de Lego: você monta telas combinando peças.

Tailwind CSS
Em vez de escrever arquivos CSS separados, você aplica classes prontas direto no elemento (como p-4 para espaçamento ou text-center para centralizar). Segue a documentação oficial em tailwindcss.com, que tem um guia específico para Vite.

API externa para o CRUD
Aqui está uma decisão importante. O briefing exige consumir uma API externa com criar, ler, atualizar e excluir. Opções:

json-server: simula uma API a partir de um arquivo db.json. Ótimo para aprender, mas roda só no seu computador, o que complica o deploy.
MockAPI (mockapi.io): você cria uma API online grátis, com endpoints e dados. É a opção mais prática, porque funciona também depois do deploy.
Supabase ou Firebase: bancos online mais completos, mas mais conceitos para aprender.

Minha sugestão para você: MockAPI. Confirme com o professor se ele aceita, já que “API externa” pode ter interpretações diferentes.

Vercel ou Netlify (deploy)
Colocam seu site no ar com um link público. Você conecta o GitHub e a cada push o site atualiza. O briefing pede o link do deploy.

Postman ou Thunder Client (opcional)
Servem para testar sua API antes de ligar no React. Thunder Client roda dentro do VS Code.

Parte 2: Passo a passo do projeto
Passo 1: Planejar no papel (antes de programar)

O briefing diz “antes de programar, desenhar”. Defina:

O dado principal. No tema do calor, cada registro pode ser um ponto de apoio (sombra, água, descanso). Quais informações ele tem? Por exemplo: nome, tipo, endereço ou bairro, horário de funcionamento, observações.
As telas. Lista de pontos, formulário de cadastro, edição, tela de detalhes, talvez um filtro por tipo.
Funcionalidades ligadas ao tema. O briefing diz que não aceita interface estática. Além do CRUD, pense em algo que faça sentido para o calor: filtro por tipo de ponto, busca por bairro, um alerta de calor com base na temperatura, marcar um ponto como “aberto agora”.

Importante: lembre da regra de nada de dados pessoais reais. Cadastre só dados de locais, nunca nome ou telefone de pessoas.

Passo 2: Criar a API

Crie a API no MockAPI com o recurso (por exemplo, pontos) e os campos que você definiu. Teste no navegador abrindo a URL: ela deve devolver uma lista em JSON. Aqui você entende o CRUD na prática:

Create: POST (criar)
Read: GET (ler)
Update: PUT (atualizar)
Delete: DELETE (excluir)
Passo 3: Criar o projeto e instalar o Tailwind

Crie o projeto com Vite, instale o Tailwind seguindo o guia oficial e rode npm run dev para ver a página inicial funcionando. Faça seu primeiro commit aqui.

Passo 4: Entender a arquitetura em camadas

Este é o conceito mais cobrado. O briefing pede separar lógica de negócio, acesso aos dados e camada visual. Pense assim, usando uma analogia de restaurante:

Camada visual (componentes) é o salão: o que o cliente vê. Só mostra coisas e avisa quando algo é clicado.
Lógica de negócio (custom hooks) é a cozinha: decide o que fazer, guarda o estado, trata erros.
Acesso aos dados (services) é o fornecedor: só ele conversa com a API.

Regra de ouro: o componente nunca chama a API diretamente. Ele pede ao hook, e o hook pede ao service.

Passo 5: Construir de baixo para cima

Siga esta ordem, porque cada parte depende da anterior:

Service: funções que fazem as 4 operações na API. Teste-as primeiro.
Custom hook principal: guarda a lista de pontos, o estado de “carregando” e de “erro”, e oferece funções de criar, editar e excluir. É aqui que o useState e o useEffect entram: useEffect busca a lista quando a tela abre, useState guarda o resultado.
Segundo custom hook: por exemplo, um para gerenciar o formulário (campos e validação) ou outro para filtros e busca. O briefing exige no mínimo 2.
Componentes pequenos: botão, card, campo de formulário, mensagem de erro, indicador de carregamento.
Componentes maiores: lista, formulário, cabeçalho, filtros.
Página principal: junta tudo.
Passo 6: Os 8 componentes mínimos

Uma divisão possível para o seu tema:

Header
PontoCard
PontoList
PontoForm
FiltroTipo (ou barra de busca)
Botao
Loading
MensagemErro ou Modal de confirmação de exclusão

Cada um deve fazer uma coisa só e ser reutilizável. Se um componente está grande demais, divida.

Passo 7: Tratar os estados da tela

Todo sistema que conversa com API tem 3 situações que você precisa mostrar ao usuário: carregando, erro e lista vazia. Muita gente esquece, e é o que diferencia um projeto bom de um amador.

Passo 8: Pensar em quem vai usar

O briefing insiste nisso (páginas 9 e 22): letras legíveis, bom contraste, linguagem simples e telas pequenas. Seu público (entregador, idoso) vai usar no celular, muitas vezes ao sol. Então:

Projete primeiro para celular (o Tailwind facilita com prefixos responsivos).
Botões grandes, textos claros, cores com contraste forte.
Mensagens curtas e diretas, no tom de voz do público.
Passo 9: Versionar enquanto avança

Faça um commit a cada etapa concluída, com mensagens que expliquem o que mudou. Exemplos de ideia: “cria service da API”, “adiciona hook de pontos”, “cria componente PontoCard”. Assim você chega nos 15 commits naturalmente e com histórico que mostra evolução.

Passo 10: Deploy

Conecte o repositório ao Vercel ou Netlify. Teste o link no celular. Confira se o CRUD funciona no site publicado, não só no seu computador.

Passo 11: Documentação
README.md: começa com a Ficha da CitizenTech (página 21), depois descrição, pré-requisitos e instruções para instalar e rodar.
AI.md (na raiz do projeto): ferramentas de IA usadas, exemplos de prompts e respostas, o que a IA ajudou a fazer, como vocês verificaram e testaram, e uma análise crítica. Precisa refletir o uso real. Se não usar IA, declare isso explicitamente. Vá anotando conforme usa, para não esquecer depois.
Passo 12: Entrega

Pelo Teams, em cada disciplina (Frontend e Web Development, separadamente): link do repositório privado, ZIP do projeto, README.md, link do deploy e AI.md. Lembre de dar acesso de escrita aos dois professores e testar. Apague a pasta node_modules antes de zipar, senão o arquivo fica gigante.

Parte 3: Organização dos arquivos no VS Code

Uma estrutura limpa para o seu projeto:

citizentech-calor/
├── public/
├── src/
│   ├── components/      → peças visuais (Header, PontoCard, PontoForm...)
│   ├── hooks/           → lógica de negócio (usePontos, useFiltro...)
│   ├── services/        → acesso à API (pontosService)
│   ├── pages/           → telas montadas (Home)
│   ├── utils/           → funções auxiliares (formatadores, validações)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        → onde o Tailwind é carregado
├── .env                 → endereço da API (não vai pro GitHub)
├── .gitignore           → lista do que o Git ignora (node_modules, .env)
├── AI.md
├── README.md
├── package.json
└── vite.config.js

Por que assim:

components/, hooks/ e services/ são as três camadas que o briefing pede, cada uma na sua pasta. O professor abre e vê a separação na hora.
.env guarda a URL da API fora do código. Garanta que está no .gitignore.
AI.md e README.md na raiz, como pedido.
Nomes que fazem sentido, como pede o briefing na página 22.
Ordem sugerida para você começar hoje
Instalar Node, Git e VS Code
Definir o dado principal e as telas no papel
Criar a API no MockAPI
Criar o projeto Vite, instalar Tailwind, primeiro commit
Montar a estrutura de pastas

**Prompt 3**
>User: quero que adicione na pasta public/ uma logo.png e um favicon.ico, quero que faça em formato SVG, de acordo com a estrutura de cada um abaixo

>Logo Geométrico e Abstrato: "O Arco do Pôr do Sol"

>- **Conceito:** Um semicírculo (representando a sombra ou um sombreiro/guarda-sol estilizado) posicionado sobre ondas d'água minimalistas (duas ou três linhas suaves).
>- **Formas:** Formas geométricas limpas e simétricas, fáceis de aplicar em carimbos, bordados e ícones de app.
>- **Cores:** Tons terrosos (terracota ou amarelo-areia) para a sombra/topo e azul-marinho para a água.
>- **Tipografia:** Serifada elegante e relaxada (ex: Playfair Display, Cinzel).
>- **Vibe:** Acolhedora, artesanal, pousada pé na areia ou marca de bem-estar.

>O Favicon "Arco sobre Onda"

>- **A Adaptação:** Use o ícone completo da logo (o semicírculo acima das ondas) como o favicon, mas remova completamente o texto da marca para dar máximo espaço ao símbolo. O símbolo deve ser centralizado e ocupar o maior tamanho possível dentro do quadrado de 16x16 pixels.
>- **Por que funciona:** As formas geométricas são fáceis de reconhecer mesmo quando muito pequenas. O contraste entre o semicírculo (terracota/areia) e as ondas (azul-marinho) cria uma separação visual clara, facilitando a identificação imediata na aba do navegador.
>- **Cores:** Mantenha as cores originais da logo — o arco terracota e as ondas azul-marinho. Para maior visibilidade em navegadores com fundo escuro, certifique-se de que o favicon tenha um fundo transparente, ou adicione uma borda sutil e clara ao redor de todo o símbolo.

**Resposta Obtida**
Os arquivos vetoriais já estão no lugar. Como o pedido também cita explicitamente os nomes logo.png e favicon.ico, estou checando se há um conversor disponível para gerar esses binários de verdade a partir da arte SVG, em vez de entregar arquivos com extensão enganosa.

**Prompt 4**
>Atue como um designer UI/UX e desenvolvedor frontend especialista em CSS/Tailwind. Quero refatorar o design do meu site para que ele fique moderno, harmonioso e totalmente alinhado com a identidade visual da minha logo.

>Aqui estão os dados exatos da paleta de cores extraída da minha marca:
>- Cor Primária (Terracota / Pôr do Sol): #CF6D4E
>- Cor Secundária (Azul-Marinho / Água): #1B3F5E
>- Fundo Escuro (Dark Mode): #141414
>- Fundo Claro / Apoio: #F4F1EA ou #FFFFFF
>- Texto de Alto Contraste: #FFFFFF ou #141414

>Por favor, reestruture o CSS do projeto aplicando as seguintes diretrizes de design:

>1. Hierarquia de Cores e Contraste:
   >- Use o Azul-Marinho (#1B3F5E) para títulos principais (headings), navbar ou elementos estruturais fortes.
   >- Use o Terracota (#CF6D4E) para botões de ação (Call to Action / CTAs), destaques, badges e estados de hover para dar vida à >interface.
   >- Garanta que a relação de contraste entre texto e fundo siga as normas de acessibilidade (WCAG).

>2. Tipografia e Estilo:
   >- Defina fontes elegantes que combinem com o tom "Sombra, Água e Descanso". Sugira fontes do Google Fonts (ex: serifada elegante como 'Playfair Display' para títulos e sans-serif limpa como 'Inter' ou 'Montserrat' para o corpo).

>3. Refinamento Visual (UI Kit):
   >- Aplique um design moderno com espaçamentos generosos (padding/margin), bordas levemente arredondadas (`border-radius: 8px` a >`12px`) e sombras sutis para dar profundidade aos cards.
   >- Adicione transições suaves em botões e links (`transition: all 0.3s ease`).

>Por favor, forneça:
>1. As variáveis CSS (ou configuração do Tailwind/theme) atualizadas com essa nova paleta.
>2. Exemplos de estilização para o Header, Botões principais/secundários e Cards do site.

**Resposta Obtida**
Refatorei o tema usando terracota para CTAs, azul-marinho para estrutura e títulos, e fundo claro. Os tokens estão em index.css, incluindo a cor de fundo escuro; Lora foi aplicada aos títulos e Atkinson Hyperlegible mantida no corpo do texto.

Atualizei o Header, os botões e os cards, além das cores dos badges em constantes.js. A fonte Lora foi adicionada em index.html.

Validei o contraste dos principais pares: texto no CTA terracota 5,22:1, no hover 4,58:1 e texto branco no header marinho 10,94:1. npm run build passou e não foram encontrados erros nos arquivos alterados.

## 3. Aplicação no projeto

- Estrutura de pastas e divisão em camadas (componentes, hooks e services).
- Código inicial dos componentes, dos custom hooks e do service de CRUD.
- Textos de interface e validações do formulário.

## 4. Validação das respostas

Rodamos `npm run dev`, testamos criar, editar e excluir um ponto, conferimos os dados no painel do MockAPI, testamos no celular, corrigimos erros encontrados.

## 5. Análise crítica

**Benefícios:** acelerou a montagem da estrutura e ajudou a entender a separação em camadas

**Limitações:** o código gerado precisou ser revisado e adaptado à nossa API

**Dificuldades:** entender onde cada responsabilidade deve ficar
