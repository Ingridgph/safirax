# Plano de Reestruturação — SafiraX

Guia de execução exato do que vamos fazer para melhorar a estrutura do projeto.

## Objetivo

Reorganizar `src/` em camadas escaláveis, padronizar estilos, tokenizar cores, extrair dados e infraestrutura, e limpar dependências — sem mudar o visual da página.

## Estrutura alvo

```
src/
  main.tsx                      # bootstrap (importa ./index.css)
  App.tsx                       # composição das seções
  index.css                     # tailwind + @theme (tokens) + reset global
  data/
    portfolio.ts                # type Project + projects[]
  hooks/
    useScrollToTop.ts           # extraído do useEffect do Hero
  lib/
    cn.ts                       # merge de classNames
  components/
    ui/                         # primitivos reutilizáveis (Button, Card...) — placeholder
    layout/
      Header/
        Header.tsx
        Header.module.css
    common/
      Logo/
        Logo.tsx                # unifica SVG do Header + Hero (variants)
        Logo.module.css
      GlyphMatrix/
        GlyphMatrix.tsx         # resolve var(--color-*) + corrige type React.HTMLAttributes
  features/
    hero/
      Hero.tsx
      Bubbles.tsx
      Hero.module.css           # keyframes lava/float/fade movidos para cá
    portfolio/
      Portfolio.tsx
      ProjectCard.tsx
      Portfolio.module.css      # keyframe border-spin + @property --a movidos para cá
```

## Tarefas

### 1. Padronizar estilos (CSS Modules)
- Renomear CSS avulso para `*.module.css` e usar `className={styles.x}`.
- Mover os keyframes que pertencem a cada seção para o módulo que os usa.
- Manter Tailwind para layout simples (ex.: `absolute inset-0 z-0`, widths do Logo).
- Remover `styles/animations.css` (conteúdo redistribuído) e fundir `styles/globals.css` dentro de `index.css`.
- Eliminar keyframe morto `spin-border`.
- Remover filtros SVG não usados (`circle-shadow`, `star-shadow`) do Logo.

### 2. Aliases de importação
- `vite.config.ts`: `resolve.alias = { '@': <src> }` (com `fileURLToPath`).
- `tsconfig.app.json`: `baseUrl: "."` + `paths: { "@/*": ["./src/*"] }`.
- Trocar todos os imports relativos por `@/...`.

### 3. Dados fora dos componentes
- Criar `src/data/portfolio.ts` com `interface Project` e `projects[]`.
- `Portfolio.tsx` passa a consumir `projects` de lá; card vira `ProjectCard.tsx`.

### 4. Reutilizar o Logo
- Criar `components/common/Logo/Logo.tsx` com `variant: 'hero' | 'header'`.
- Header usa `variant="header"`, Hero usa `variant="hero"`.
- Largura controlada pelo consumidor via classe (`w-[70px]`, `w-[260px] max-[480px]:w-[180px]`).

### 5. Estrutura escalável
- `components/`: `ui/` (placeholder), `layout/` (Header), `common/` (Logo, GlyphMatrix).
- `features/`: Hero e Portfolio autocontidos.
- `hooks/`, `lib/`, `data/` conforme árvore acima.
- `GlyphMatrix` sai de `effects/` e vai para `components/common/`.

### 6. Tokens do tema
- Ampliar `@theme` em `index.css`:
  - `purple-950 #190030`, `purple-800 #1a0035`, `purple-600 #6D00CF`, `purple-200 #C2A5E8`, `purple-50 #A48CC4` (mantendo 900/700/500/300/100 originais).
- Substituir hex "de marca" espalhados por `var(--color-purple-*)` em CSS e SVG.
- Alinhar fontes aos arquivos realmente carregados: `--font-display` ("Press Start 2P") e `--font-mono` ("Source Code Pro").
- Usar `color-mix(in srgb, var(--color-*), %)` para variantes com alpha.
- Tons vivos decorativos dos blobs (`#d980ff`, `#b44aff`, `#a020ff`, `#cc66ff`, `#e0aaff`, `#e099ff`, `#f0c0ff`) permanecem literais em `Hero.module.css`.
- `GlyphMatrix.cssColorToRgb` passa a resolver `var(--x)` via `getComputedStyle`.

### 7. Organização por feature
- `src/sections/` vira `src/features/` (Hero, Portfolio).
- `src/components/Header` move para `src/components/layout/Header`.

### 8. Infra/limpeza
- Criar `README.md` e `AGENTS.md` (este arquivo + comandos).
- Criar `components/ui/.gitkeep` para preservar o placeholder.
- Adicionar script `"typecheck": "tsc -b"` no `package.json`.
- `pnpm remove framer-motion` (manter apenas `motion` — mesma lib, nome atual).
- Apagar `package-lock.json` (duplicado do `pnpm-lock.yaml`).
- Corrigir no GlyphMatrix o uso de `React.HTMLAttributes` sem import (import type `HTMLAttributes`).
- Corrigir `stroke-width` → `strokeWidth` no SVG do card (JSX válido).

## Arquivos

Criar:
- `src/data/portfolio.ts`, `src/hooks/useScrollToTop.ts`, `src/lib/cn.ts`
- `src/components/ui/.gitkeep`
- `src/components/layout/Header/Header.tsx` + `Header.module.css`
- `src/components/common/Logo/Logo.tsx` + `Logo.module.css`
- `src/components/common/GlyphMatrix/GlyphMatrix.tsx`
- `src/features/hero/{Hero.tsx,Bubbles.tsx,Hero.module.css}`
- `src/features/portfolio/{Portfolio.tsx,ProjectCard.tsx,Portfolio.module.css}`
- `README.md`, `AGENTS.md`, `PLANO_DE_ESTRUTURA.md` (este)

Editar:
- `vite.config.ts`, `tsconfig.app.json`, `index.css`, `App.tsx`, `main.tsx`, `package.json`

Deletar:
- `src/effects/`, `src/sections/`, `src/styles/`, `src/components/Header/`, `package-lock.json`
- filtros/`keyframes` mortos (ver tarefa 1)

Mover (via criação + exclusão):
- keyframes `lava-drift-*`, `float`, `hero-fade-in` → `Hero.module.css`
- keyframe `border-spin` + `@property --a` → `Portfolio.module.css`

## Verificação

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm run dev   # conferir visual em http://localhost:5173
```