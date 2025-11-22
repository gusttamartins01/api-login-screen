
Scripts (em [package.json](package.json))
- dev: inicia Vite (`vite`)
- build: `tsc -b && vite build`
- lint: `eslint .`
- preview: `vite preview`


Arquitetura e fluxo
- Entrada: [src/main.tsx](src/main.tsx) — monta a app com o [`AuthProvider`](src/context/AuthContext.tsx) e renderiza [`App`](src/App.tsx).
- Roteamento: [src/App.tsx](src/App.tsx) usa `react-router` para definir rotas:
  - `/` → [`LoginPage`](src/pages/LoginPage.tsx)
  - `/dashboard` → rota privada implementada por `PrivateRoute` dentro de [src/App.tsx](src/App.tsx) que verifica [`user`](src/context/AuthContext.tsx) (via [`useAuth`](src/context/AuthContext.tsx)) e redireciona para `/` se não autenticado.
  - `*` → [`NotFound`](src/pages/NotFound.tsx)
- Autenticação: [src/context/AuthContext.tsx](src/context/AuthContext.tsx)
  - Estado `user` persistido em localStorage.
  - Métodos: [`login`](src/context/AuthContext.tsx) e [`logout`](src/context/AuthContext.tsx).
  - Hook: [`useAuth`](src/context/AuthContext.tsx) para consumir o contexto.


Componentes principais
- [`LoginPage`](src/pages/LoginPage.tsx)
  - Form simples que chama [`login`](src/context/AuthContext.tsx) com o nome e navega para `/dashboard`.
  - Usa ícones de `lucide-react`.
- [`Dashboard`](src/pages/Dashboard.tsx)
  - Layout de cards e inclui [`Navbar`](src/components/Navbar.tsx) e vários [`Card`](src/components/Card.tsx).
- [`Navbar`](src/components/Navbar.tsx)
  - Mostra `Olá, {user}` e botão que chama [`logout`](src/context/AuthContext.tsx).
- [`Card`](src/components/Card.tsx)
  - Componente simples para cards do dashboard.

Estilização e configuração
- Tailwind: [tailwind.config.js](tailwind.config.js) e [postcss.config.js](postcss.config.js)
- Estilos globais: [src/index.css](src/index.css)
- Estilos de exemplo: [src/App.css](src/App.css)
- Vite: [vite.config.ts](vite.config.ts)
- TypeScript: [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json), [tsconfig.json](tsconfig.json)

Bugs conhecidos / inconsistências (recomendado corrigir)
- [src/main.tsx](src/main.tsx): importa `ReactDoM` em vez de `ReactDOM`. Isso quebrará a inicialização.
  - Símbolo afetado: [`ReactDoM`](src/main.tsx)
- [src/pages/LoginPage.tsx](src/pages/LoginPage.tsx): várias classes Tailwind e atributos com typo:
  - `shadow-2x1` → `shadow-2xl`
  - `text-2x1` → `text-2xl`
  - `rounded-x1` → `rounded-xl`
  - `outiline-none` → `outline-none`
  - Acessibilidade: inputs não têm labels associados.
- [src/pages/NotFound.tsx](src/pages/NotFound.tsx): classes com typo:
  - `itemss-center` → `items-center`
  - `text-3x1` → `text-3xl`
- [src/pages/Dashboard.tsx](src/pages/Dashboard.tsx): ícone `ListTodo` do lucide pode não existir na versão instalada — verificar import.
- Consistência de idioma: mistura de inglês/português (por exemplo, placeholders vs textos). Padronizar.
- Lint/TS: Projeto está em TS com `strict: true` — alguns tipos podem precisar ser ajustados se erros aparecerem.

Sugestões de melhorias
- Validar e sanitizar email/senha em [`LoginPage`](src/pages/LoginPage.tsx).
- Melhorar UX: persistir rota desejada antes do redirect (para voltar ao caminho solicitado após login).
- Adicionar testes unitários / e2e.
- Criar componente de botão/form control reutilizável.
- Proteger rota com refresh do token (se backend existir).
- Adicionar tratamento de erros para `localStorage` (ex: try/catch).

Notas adicionais
- Script de exemplo Node: [teste.js](teste.js) (não relacionado à app React, usa prompt-sync).
- Linter configurado em [eslint.config.js](eslint.config.js).
- Pacotes principais: React 19, Vite, Tailwind, lucide-react.

Se quiser, eu posso:
- Gerar um README.md pronto para projeto.
- Aplicar correções automáticas sugeridas (ex.: corrigir typos em estilos e o import `ReactDOM`) — diga qual arquivo editar e eu gero o patch.

Scripts (em [package.json](package.json))
- dev: inicia Vite (`vite`)
- build: `tsc -b && vite build`
- lint: `eslint .`
- preview: `vite preview`

Arquitetura e fluxo
- Entrada: [src/main.tsx](src/main.tsx) — monta a app com o [`AuthProvider`](src/context/AuthContext.tsx) e renderiza [`App`](src/App.tsx).
- Roteamento: [src/App.tsx](src/App.tsx) usa `react-router` para definir rotas:
  - `/` → [`LoginPage`](src/pages/LoginPage.tsx)
  - `/dashboard` → rota privada implementada por `PrivateRoute` dentro de [src/App.tsx](src/App.tsx) que verifica [`user`](src/context/AuthContext.tsx) (via [`useAuth`](src/context/AuthContext.tsx)) e redireciona para `/` se não autenticado.
  - `*` → [`NotFound`](src/pages/NotFound.tsx)
- Autenticação: [src/context/AuthContext.tsx](src/context/AuthContext.tsx)
  - Estado `user` persistido em localStorage.
  - Métodos: [`login`](src/context/AuthContext.tsx) e [`logout`](src/context/AuthContext.tsx).
  - Hook: [`useAuth`](src/context/AuthContext.tsx) para consumir o contexto.

Componentes principais
- [`LoginPage`](src/pages/LoginPage.tsx)
  - Form simples que chama [`login`](src/context/AuthContext.tsx) com o nome e navega para `/dashboard`.
  - Usa ícones de `lucide-react`.
- [`Dashboard`](src/pages/Dashboard.tsx)
  - Layout de cards e inclui [`Navbar`](src/components/Navbar.tsx) e vários [`Card`](src/components/Card.tsx).
- [`Navbar`](src/components/Navbar.tsx)
  - Mostra `Olá, {user}` e botão que chama [`logout`](src/context/AuthContext.tsx).
- [`Card`](src/components/Card.tsx)
  - Componente simples para cards do dashboard.

Estilização e configuração
- Tailwind: [tailwind.config.js](tailwind.config.js) e [postcss.config.js](postcss.config.js)
- Estilos globais: [src/index.css](src/index.css)
- Estilos de exemplo: [src/App.css](src/App.css)
- Vite: [vite.config.ts](vite.config.ts)
- TypeScript: [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json), [tsconfig.json](tsconfig.json)

Bugs conhecidos / inconsistências (recomendado corrigir)
- [src/main.tsx](src/main.tsx): importa `ReactDoM` em vez de `ReactDOM`. Isso quebrará a inicialização.
  - Símbolo afetado: [`ReactDoM`](src/main.tsx)
- [src/pages/LoginPage.tsx](src/pages/LoginPage.tsx): várias classes Tailwind e atributos com typo:
  - `shadow-2x1` → `shadow-2xl`
  - `text-2x1` → `text-2xl`
  - `rounded-x1` → `rounded-xl`
  - `outiline-none` → `outline-none`
  - Acessibilidade: inputs não têm labels associados.
- [src/pages/NotFound.tsx](src/pages/NotFound.tsx): classes com typo:
  - `itemss-center` → `items-center`
  - `text-3x1` → `text-3xl`
- [src/pages/Dashboard.tsx](src/pages/Dashboard.tsx): ícone `ListTodo` do lucide pode não existir na versão instalada — verificar import.
- Consistência de idioma: mistura de inglês/português (por exemplo, placeholders vs textos). Padronizar.
- Lint/TS: Projeto está em TS com `strict: true` — alguns tipos podem precisar ser ajustados se erros aparecerem.

Sugestões de melhorias
- Validar e sanitizar email/senha em [`LoginPage`](src/pages/LoginPage.tsx).
- Melhorar UX: persistir rota desejada antes do redirect (para voltar ao caminho solicitado após login).
- Adicionar testes unitários / e2e.
- Criar componente de botão/form control reutilizável.
- Proteger rota com refresh do token (se backend existir).
- Adicionar tratamento de erros para `localStorage` (ex: try/catch).

Notas adicionais
- Script de exemplo Node: [teste.js](teste.js) (não relacionado à app React, usa prompt-sync).
- Linter configurado em [eslint.config.js](eslint.config.js).
- Pacotes principais: React 19, Vite, Tailwind, lucide-react.
