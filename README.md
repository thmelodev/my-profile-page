# Thiago Melo · Portfólio

Página pessoal de Thiago Melo, desenvolvedor de software. Reúne experiência, stack, projetos e contato.

## Stack

- React 19 + TypeScript, com Vite
- Tailwind CSS v4 (tokens de cor e animações em `src/index.css`)
- Fonte Bricolage Grotesque auto-hospedada via `@fontsource-variable`
- Ícones `lucide-react`

As animações são feitas só com CSS e `IntersectionObserver`, sem biblioteca. Quem ativa "reduzir movimento" no sistema vê tudo já no estado final.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run lint
```

## Onde editar o conteúdo

Todo o texto fica em [`src/data/profile.ts`](src/data/profile.ts): dados de contato, cargos, formação, idiomas, stack e projetos. Os componentes só leem esse arquivo.

- **Selo "Aberto a novas oportunidades":** `profile.openToWork`.
- **Novo projeto:** acrescente um item em `projects`, com um print 16:10 da página inicial em `src/assets/projects/`.
- **CV:** o PDF servido pelo botão "Baixar CV" é `public/docs/Thiago_Melo_CV.pdf`. Ele é gerado a partir de [`cv/Thiago_Melo_CV.html`](cv/Thiago_Melo_CV.html): edite o HTML e rode o comando abaixo (Windows, com o Edge instalado).

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --no-pdf-header-footer `
  "--print-to-pdf=$PWD\public\docs\Thiago_Melo_CV.pdf" "file:///$PWD/cv/Thiago_Melo_CV.html"
```
