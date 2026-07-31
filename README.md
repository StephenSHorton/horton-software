# Horton Software LLC

Company site for [Horton Software LLC](https://stephenshorton.github.io/horton-software/).

## Stack

| Piece | Choice |
| --- | --- |
| Vite | 8.x (Rolldown) |
| TypeScript | 5.9 + `tsgo` (`@typescript/native-preview`) |
| React | 19 + React Compiler |
| UI | shadcn (New York) + Tailwind 4 |
| Routing | TanStack Router |
| Lint | Biome |
| Host | GitHub Pages (`/horton-software/`) |

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/horton-software/
npm run build
npm run preview
npm run lint
```

Local root URL (no base path):

```bash
# PowerShell
$env:VITE_BASE="/"; npm run dev
```

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time repo setup (GitHub → Settings → Pages):

1. **Source:** GitHub Actions
2. After first green deploy: site at `https://stephenshorton.github.io/horton-software/`

Custom domain later: set DNS + Pages custom domain, then build with `VITE_BASE=/`.
