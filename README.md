# Ponto Fresco

Aplicação web que ajuda trabalhadores de rua e idosos a encontrar bebedouros, sombra e locais de descanso em dias de calor extremo, na região da Av. Paulista, em São Paulo.

## Ficha da CitizenTech

| Campo | Preenchimento |
|---|---|
| **Nome da CitizenTech** | Ponto Fresco |
| **Cidade e bairro** | São Paulo, Bela Vista (região da Av. Paulista) |
| **Cidadão beneficiado** | Trabalhadores de rua (entregadores, ambulantes) e idosos da região |
| **Problema, em uma frase** | Trabalhadores de rua e idosos não sabem onde encontrar sombra, água e descanso nos dias de calor extremo e ficam expostos a riscos de saúde. |
| **Como funciona** | A pessoa informa a temperatura, recebe o nível de risco e consulta, filtra e gerencia uma lista de pontos de apoio (bebedouro, sombra e descanso) guardada numa API. |
| **O que cada parte faz** | **Web/Front-end:** esta aplicação (interface e CRUD). **Python:** menu em terminal que registra temperaturas e pontos de apoio em JSON e classifica o risco de calor. **Sensor ESP32:** mede temperatura e umidade e responde com LED e buzzer, mesmo sem internet. **Matemática:** calcula a velocidade do aquecimento (derivada) e a exposição acumulada ao calor (integral). **Experiência:** requisitos, casos de uso, protótipo e roadmap. **Pitch:** vídeo de 3 minutos com a história do trabalhador de rua e a solução. |
| **Link do repositório** | https://github.com/RafaelYutaNischida/GS-Front-WebDev |
| **Link do deploy** | *(colar aqui o link da Vercel)* |
| **Indicador de impacto** | Número de pontos de apoio (bebedouros, sombra e descanso) cadastrados e disponíveis na região |
| **ODS conectados** | ODS 3 (Saúde e bem-estar), ODS 11 (Cidades e comunidades sustentáveis), ODS 13 (Ação contra a mudança global do clima) |

> **Como o projeto contribui com os ODS:** o ODS 3 é atendido ao reduzir o risco de desidratação e mal-estar por calor; o ODS 11, ao melhorar o acesso a espaços públicos seguros; e o ODS 13, ao ajudar a população a se adaptar a ondas de calor.

## Integrantes

- Gustavo Almeida Lopes do Nascimento, RM 571070
- João Gabriel Mosqueti Agra Cunha, RM 572017
- Rafael Yuta Nischida, RM 570552
- Leonardo Teodoro Leitão, RM 569724

## Funcionalidades

- **CRUD completo** de pontos de apoio (criar, listar, editar e excluir), consumindo uma API externa (MockAPI).
- **Alerta de calor:** o usuário informa a temperatura e recebe o nível (normal, atenção ou perigo) e uma orientação. As faixas de 30 °C e 35 °C são ilustrativas, não oficiais.
- **Filtros** por tipo, por nome ou bairro e por "aberto agora".
- Estados de **carregando, erro e lista vazia**, com validação nos formulários.
- Layout pensado para celular, com letras legíveis, bom contraste e botões grandes.

## Tecnologias

React 18, Vite, Tailwind CSS 4 e MockAPI.

## Arquitetura (separação de responsabilidades)

| Camada | Pasta | Papel |
|---|---|---|
| Visual | `src/components`, `src/pages` | Só mostra dados e avisa quando algo é clicado |
| Lógica de negócio | `src/hooks` | Estado, filtros, validação e regras do CRUD |
| Acesso aos dados | `src/services` | Único lugar que conversa com a API |

Custom hooks: `usePontos`, `usePontoForm` e `useFiltros`.

## Estrutura de pastas

```
src/
├── components/   peças visuais (Header, PontoCard, PontoForm, FiltroBar, AlertaCalor...)
├── hooks/        lógica de negócio (usePontos, usePontoForm, useFiltros)
├── services/     acesso à API (pontosService.js)
├── pages/        tela principal (Home.jsx)
├── utils/        constantes, validações e regras do alerta de calor
├── App.jsx
├── main.jsx
└── index.css     Tailwind e cores do projeto
```

## Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Roda o site em modo de desenvolvimento |
| `npm run build` | Gera a versão final na pasta `dist/` |
| `npm run preview` | Abre a versão final localmente para conferir |

## Como testar o CRUD

1. **Listar:** ao abrir o site, os pontos da API aparecem na lista.
2. **Criar:** clique em "Cadastrar ponto", preencha o formulário e salve.
3. **Editar:** clique em "Editar" em um ponto, altere um campo e salve.
4. **Excluir:** clique em "Excluir" e confirme na janela.
5. **Conferir:** abra o painel do MockAPI e veja se a alteração apareceu lá.

## Pré-requisitos

- Node.js 18 ou superior (versão LTS)
- Uma API no MockAPI com o recurso `pontos`

## Como instalar e rodar

```bash
npm install
cp .env.example .env
npm run dev
```

Depois de copiar o `.env.example`, edite o `.env` e coloque a URL da sua API. Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

### Variável de ambiente

```
VITE_API_URL=https://SEU_ID.mockapi.io/api/v1
```

A URL termina em `/v1`, **sem** `/pontos` (o código acrescenta isso). Depois de editar o `.env`, reinicie o `npm run dev`. No deploy (Vercel ou Netlify), cadastre essa mesma variável no painel do serviço.

## Recurso `pontos` no MockAPI

Campos guardados na API: `id`, `nome`, `tipo` (agua, sombra ou descanso), `endereco`, `bairro`, `horario`, `observacoes`, `aberto`, `latitude`, `longitude`, `descricao` e `ativo`.

O site usa `nome`, `tipo`, `endereco`, `bairro`, `horario`, `observacoes` e `aberto`. Os campos `latitude`, `longitude`, `descricao` e `ativo` vieram da primeira versão dos dados. Por isso, `src/services/pontosService.js` ainda aceita registros antigos: converte `descricao` em `observacoes`, `ativo` em `aberto`, separa o bairro do `endereco` e trata o tipo `bebedouro` como "Água".

## Dados e privacidade

O projeto não usa dados pessoais reais. Os pontos cadastrados são **dados simulados** de locais públicos da região da Bela Vista, usados apenas para demonstração.

## Deploy

**Link do site publicado (Vercel):** *(colar aqui o link da Vercel)*

Como publicar:

1. Entre em vercel.com com a conta do GitHub e clique em **Add New > Project**.
2. Escolha o repositório `GS-Front-WebDev` e confirme que o framework detectado é **Vite**.
3. Em **Environment Variables**, cadastre `VITE_API_URL` com a URL da API (termina em `/v1`, sem `/pontos`).
4. Clique em **Deploy** e, quando terminar, copie o link e cole acima.

Depois de publicar, abra o link no celular e teste criar, editar e excluir um ponto. A cada `git push`, a Vercel atualiza o site sozinha.