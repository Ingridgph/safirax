# SafiraX

Landing page do portfólio SafiraX — tema visual roxo "olho de safira" com efeitos de matrix e lava lamp.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (via plugin `@tailwindcss/vite`)
- motion (animações futuras)
- oxlint

## Scripts

```bash
pnpm dev          # servidor de desenvolvimento
pnpm typecheck    # typecheck TS (tsc -b)
pnpm lint         # oxlint
pnpm build        # typecheck + build de produção
pnpm preview      # pré-visualizar o build
```

## Estrutura

```
src/
  index.css               # tailwind + @theme (tokens de cor e fonte)
  data/                   # dados (ex.: portfólio)
  hooks/                  # hooks reutilizáveis
  lib/                    # utilitários
  components/
    ui/                   # primitivos reutilizáveis
    layout/               # Header, Footer...
    common/               # Logo, GlyphMatrix...
  features/
    hero/
    portfolio/
```

## Convenções

- Imports internos usam o alias `@/`.
- Estilo por componente em `*.module.css`; Tailwind para layout simples.
- Cores e fontes vêm dos tokens em `src/index.css` (`--color-*`, `--font-*`) — não use hex solto.
- Dados em `src/data`, nunca hardcoded dentro do componente.