# Portfólio — Guilherme Morais

Site pessoal em **Astro + Tailwind**, bilíngue (PT / EN), publicado no **GitHub Pages**.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando          | O que faz                                  |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | servidor de desenvolvimento                 |
| `npm run build`  | gera o site estático em `dist/`             |
| `npm run preview`| serve o `dist/` para conferir antes do push |
| `npm run check`  | type-check (`astro check`)                  |

## Estrutura

```
src/
├─ data/          # conteúdo editável: perfil, experiência, projetos
│  ├─ perfil.ts
│  ├─ experiencia.ts
│  └─ projetos.ts        # ← adicionar um projeto = editar este arquivo
├─ lib/i18n.ts    # textos de interface PT/EN + helpers de idioma
├─ components/    # Nav, Hero, FichaTecnica, Sobre, Experiencia, Projetos, ...
├─ layouts/Base.astro     # <head>, SEO, Open Graph, fontes, tema
└─ pages/
   ├─ index.astro         # PT  →  /
   └─ en/index.astro      # EN  →  /en/
public/
├─ favicon.svg
├─ og-image.svg
└─ demo/
   ├─ gerenciador-os/     # demo navegável (dados fictícios, sem back-end)
   └─ par/                # demo navegável (dados fictícios, sem back-end)
```

## CI / CD

- **`.github/workflows/ci.yml`** — em cada push (fora da `main`) e PR: `npm ci`, `astro check`, `build`.
- **`.github/workflows/deploy.yml`** — em push na `main`: build e publish automático no GitHub Pages.
- **`.github/dependabot.yml`** — atualização semanal de dependências e GitHub Actions.

## Deploy — passo manual (uma vez)

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**
2. Merge na `main` → o workflow publica sozinho em
   `https://guilhermemorais23.github.io/portifolio/`.

O `astro.config.mjs` já usa `base: "/portifolio/"` (repo mantém o nome
`portifolio`). Se um dia o repo for renomeado para
`guilhermemorais23.github.io`, trocar `base` para `"/"` e a `Sitemap:` em
`public/robots.txt`.
