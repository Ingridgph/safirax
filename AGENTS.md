# AGENTS.md

Guia para quem desenvolve neste repositório (humano ou agente de IA).

## Comandos

- `pnpm dev` — servidor de desenvolvimento
- `pnpm typecheck` — checagem de tipos (`tsc -b`)
- `pnpm lint` — lint com oxlint
- `pnpm build` — typecheck + build de produção
- `pnpm preview` — serve o build de produção

Sempre rode `pnpm typecheck` e `pnpm lint` após alterações.

## Estrutura

- `src/components/`: `ui/` (primitivos), `layout/` (Header/Footer), `common/` (recursos compartilhados como `Logo`).
- `src/features/`: cada seção da página é uma feature autocontida (ex.: `hero/`, `portfolio/`).
- `src/hooks/`: hooks reutilizáveis.
- `src/lib/`: utilitários puros (ex.: `cn`).
- `src/data/`: dados de conteúdo (ex.: projetos do portfólio).

## Convenções de código

- Imports internos: alias `@/` (configurado em `vite.config.ts` + `tsconfig.app.json`).
- Estilo: CSS Modules (`*.module.css`) para estilos por componente; Tailwind para layout simples. Não crie CSS avulso global novo.
- Design tokens: cores e fontes em `src/index.css` dentro do bloco `@theme` (`--color-violet`, `--color-magenta`, `--color-cyan`, `--color-lavender`, `--color-slate-950`, `--font-display`, `--font-mono`). Use `var(--color-*)` e `color-mix()` para variantes com alpha em vez de hex solto.
- Tipagem: imports de tipo usam `import type`. `noUnusedLocals`/`noUnusedParameters` estão ativos.
- O SVG do logo é compartilhado (`src/components/common/Logo/Logo.tsx`, `variant="hero" | "header"`); não duplique.