# Pontos de apoio contra o calor

## Ficha da CitizenTech

| **Nome da CitizenTech** | Ponto Fresco |

| **Cidade e bairro** | São Paulo |

| **Cidadão beneficiado** | Trabalhadores de rua (entregadores, ambulantes) e idosos da região |

| **Problema, em uma frase** | Trabalhadores de rua e idosos não sabem onde encontrar sombra, água e descanso nos dias de calor extremo e ficam expostos a riscos de saúde. |

| **Como funciona** | A pessoa informa a temperatura, recebe o nível de risco e consulta, filtra e gerencia uma lista de pontos de apoio (sombra, água e descanso) guardada numa API. |

| **O que cada parte faz** |
|   Web/Front-end: esta aplicação (interface e CRUD).   |
|   Python: menu em terminal que registra temperaturas e pontos de apoio em JSON e classifica o risco de calor. |
|   Sensor ESP32: mede temperatura e umidade e responde com LED e buzzer, mesmo sem internet.   |
|   Matemática: calcula a velocidade do aquecimento (derivada) e a exposição acumulada ao calor (integral). |
|   Experiência: requisitos, casos de uso, protótipo e roadmap. |
|   Pitch: vídeo de 3 minutos com a história do trabalhador de rua e a solução. |

| **Link do repositório** | https://github.com/RafaelYutaNischida/GS-Front-WebDev |

| **Indicador de impacto** | Número de pontos de apoio (bebedouros, sombra e descanso) cadastrados e disponíveis na região |

| **ODS conectados** | ODS 3 (Saúde e bem-estar), ODS 11 (Cidades e comunidades sustentáveis), ODS 13 (Ação contra a mudança global do clima) |

> **Como o projeto contribui com os ODS:** ODS 3 reduz o risco de desidratação e mal-estar por calor; ODS 11 melhora o acesso a espaços públicos seguros; ODS 13 ajuda a população a se adaptar a ondas de calor.

**Integrantes:** 
Gustavo Almeida Lopes do Nascimento — RM: 571070
João Gabriel Mosqueti Agra Cunha — RM: 572017
Rafael Yuta Nischida — RM: 570552
Leonardo Teodoro Leitão - RM: 569724

## Funcionalidades

- **CRUD completo** de pontos de apoio (criar, listar, editar e excluir) consumindo uma API externa (MockAPI).
- **Alerta de calor:** o usuário informa a temperatura e recebe o nível (normal, atenção, perigo) e uma orientação. As faixas são ilustrativas, não oficiais.
- **Filtros:** por tipo, por nome/bairro e "aberto agora".
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

## Pré-requisitos

- Node.js 18 ou superior (versão LTS)
- Uma API no MockAPI com o recurso `pontos`

## Como instalar e rodar

```bash
npm install
cp .env.example .env     # depois edite o .env com a URL da sua API
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

### Variável de ambiente

```
VITE_API_URL=https://SEU_ID.mockapi.io/api/v1
```

No deploy (Vercel ou Netlify), cadastre essa mesma variável no painel do serviço.

## Estrutura do recurso `pontos` no MockAPI

`nome` (string), `tipo` (string: sombra, agua ou descanso), `bairro` (string), `endereco` (string), `horario` (string), `observacoes` (string), `aberto` (boolean).

## Dados e privacidade

O projeto não usa dados pessoais reais. Os pontos cadastrados são **dados simulados** *(ou: dados coletados de locais públicos pela equipe, informe a fonte)*.