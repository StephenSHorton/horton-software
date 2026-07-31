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
| Host | GitHub Pages + custom domain |

## Domain

- **Primary:** https://hortonsoftware.com
- **Registrar:** Squarespace Domains
- **CNAME file:** `public/CNAME` → `hortonsoftware.com`

### Squarespace DNS (custom records)

| Type | Host | Data |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `stephenshorton.github.io` |

Remove or override Squarespace parking defaults for `@` / `www` so they don’t conflict.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build
npm run preview
npm run lint
```

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) with `VITE_BASE=/`.
