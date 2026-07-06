# Guia de Skills do Stitch para Agentes

Este documento detalha as principais *skills* disponíveis para integração e automação com o Google Stitch. Cada skill possui um propósito específico, desde a ideação e estruturação do design system até a geração de componentes React e vídeos de demonstração.

Abaixo, você encontrará a descrição de cada skill e exemplos de como solicitá-las via prompt ao seu assistente de IA.

---

## 1. stitch-design
**Descrição:** É o ponto de entrada unificado para qualquer trabalho de design no Stitch. Esta skill lida com a melhoria de prompts (adicionando palavras-chave de UI/UX), a síntese de design systems (criando o arquivo `.stitch/DESIGN.md`) e a geração ou edição de telas de alta fidelidade através do servidor Stitch MCP.
**Quando usar:** Quando você precisa criar do zero ou editar telas com um padrão visual de alta qualidade.

**Exemplos de Prompt:**
> "Use a skill **stitch-design** para gerar uma tela de precificação (Pricing) com 3 planos, usando um estilo Glassmorphism e dark mode."
> "Aplique o **stitch-design** para reformular a nossa tela de Dashboard, melhorando a hierarquia visual e aplicando os tokens de cor do nosso design system."

---

## 2. enhance-prompt
**Descrição:** Transforma ideias vagas ou muito simples de interface do usuário em prompts polidos e perfeitamente otimizados para o Stitch. Ela aumenta a especificidade, adiciona jargões de UI/UX, injeta o contexto do seu design system e estrutura a saída para garantir os melhores resultados na geração de telas.
**Quando usar:** Quando você tem uma ideia crua de tela, mas não sabe como detalhar os requisitos visuais para obter um bom resultado da IA.

**Exemplos de Prompt:**
> "Use a skill **enhance-prompt** na seguinte ideia: 'quero uma tela de carrinho de compras'. Depois, use o prompt resultante para gerar a tela."
> "Melhore o meu prompt usando o **enhance-prompt**: 'página de perfil de usuário com foto e opções de editar os dados'."

---

## 3. design-md
**Descrição:** Analisa projetos já existentes no Stitch e sintetiza um *design system* semântico completo, salvando essas diretrizes em arquivos `DESIGN.md`. Isso ajuda os agentes de IA a manterem consistência visual nos próximos passos do projeto.
**Quando usar:** Quando o seu projeto já possui telas no Stitch e você precisa documentar a identidade visual gerada para usá-la em telas futuras.

**Exemplos de Prompt:**
> "Execute a skill **design-md** neste projeto do Stitch para extrair os padrões de cor e tipografia e gerar o nosso `DESIGN.md`."
> "Leia as telas atuais do projeto e crie o `DESIGN.md` utilizando a skill **design-md**."

---

## 4. taste-design
**Descrição:** É uma evolução semântica do design system para o Stitch. Ela foca em gerar arquivos `DESIGN.md` que aplicam padrões de interface "premium" e anti-genéricos. Ela define regras estritas para tipografia, cores muito bem calibradas, layouts assimétricos, micro-movimentos e performance focada em aceleração de hardware.
**Quando usar:** Quando você quer garantir que o site terá um visual de ponta, moderno e fora do padrão convencional, com uma estética muito rica e premium.

**Exemplos de Prompt:**
> "Quero que o projeto tenha um visual extremamente premium. Use a skill **taste-design** para criar nosso arquivo de diretrizes."
> "Refaça nosso design system usando a skill **taste-design**, focando em layouts assimétricos e paletas de cor sofisticadas."

---

## 5. react:components
**Descrição:** Converte os designs de alta fidelidade criados no Stitch em componentes modulares, limpos e reutilizáveis utilizando Vite e React. A skill usa uma abordagem estruturada para validar o código (via AST) e garantir a arquitetura correta.
**Quando usar:** Quando o design das telas está pronto no Stitch e você precisa transformá-lo em código real para o front-end em React.

**Exemplos de Prompt:**
> "Utilize a skill **react:components** para converter a tela 'Hero Banner' do Stitch em um componente React modular."
> "Converta o design completo do nosso projeto Stitch em um app Vite/React utilizando a skill **react:components**."

---

## 6. stitch-loop
**Descrição:** Ensina os agentes de IA a construir sites iterativamente usando o Stitch. Ele aplica um padrão de "loop autônomo", onde o agente gera o design, avalia, ajusta e passa o bastão continuamente até chegar ao resultado desejado.
**Quando usar:** Para a construção contínua de várias páginas ou iterações complexas de design, onde o agente precisa refinar o trabalho várias vezes.

**Exemplos de Prompt:**
> "Inicie um **stitch-loop** para construir e refinar a página 'Sobre Nós', iterando até que a seção da equipe fique perfeita."
> "Use o **stitch-loop** para iterar sobre o design das nossas 'Landing Pages' para testes A/B."

---

## 7. remotion
**Descrição:** Gera vídeos de demonstração (walkthroughs) dos seus projetos Stitch utilizando a tecnologia Remotion. A skill cria vídeos automatizados com transições suaves, movimentos de câmera (zoom in/out) e sobreposições de textos explicativos baseados na interface gerada.
**Quando usar:** Quando você precisar apresentar o progresso do design para stakeholders, criar portfólios ou material de marketing do produto.

**Exemplos de Prompt:**
> "Gere um vídeo walkthrough do nosso fluxo de checkout usando a skill **remotion**, adicionando textos explicando cada passo."
> "Crie uma demonstração em vídeo do nosso projeto Stitch atual com a skill **remotion**, destacando as transições entre a home e a página de contato."
