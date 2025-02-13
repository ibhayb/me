# me

This is the project of my personal website hosted with github pages!

You can visit the website: https://ibhayb.github.io/me/
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
## Deploy 

### Build Project

```sh
pnpm build
# push build to main 
```

### Deploy to Github Pages

```sh
git add dist -f
git subtree push --prefix dist origin gh-pages
```
