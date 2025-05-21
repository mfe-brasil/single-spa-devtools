# Single SPA Webpack Plugin

## Visão Geral

Este projeto é um plugin para Webpack projetado para ser utilizado no `root-config` de projetos que utilizam [single-spa](https://single-spa.js.org/). O objetivo principal é monitorar o importmap da aplicação e emitir eventos via WebSocket para a extensão do VSCode, permitindo que a extensão identifique micro frontends (MFEs) em execução e realize overrides automáticos, além de outras funcionalidades relacionadas ao ecossistema single-spa e microfrontends.

## Funcionalidades

- **Monitoramento do importmap:** Observa alterações no importmap do projeto.
- **Comunicação via WebSocket:** Emite eventos para a extensão do VSCode, facilitando integrações e automações.
- **Detecção de MFEs ativos:** Permite à extensão identificar MFEs rodando e realizar overrides automáticos.
- **Base para futuras features:** Estrutura pronta para expandir funcionalidades ligadas a single-spa e microfrontends.

> **Nota:** A implementação inicial do plugin apenas exibe uma mensagem no console ao final do build. As funcionalidades de WebSocket e monitoramento do importmap serão implementadas nas próximas versões.

## Instalação

Adicione o plugin ao seu projeto:

```bash
npm install --save-dev single-spa-devtools-webpack
# ou
pnpm add -D single-spa-devtools-webpack
```

## Uso

No seu `webpack.config.js` do root-config:

```js
const { SingleSpaDevtoolsWebpackPlugin } = require('single-spa-devtools-webpack');

module.exports = {
  // ... sua configuração webpack ...
  plugins: [
    new SingleSpaDevtoolsWebpackPlugin(),
  ],
};
```

## Como funciona

1. O plugin será importado e adicionado à lista de plugins do Webpack no root-config do seu projeto single-spa.
2. Ao final do processo de build, o plugin irá (futuramente) monitorar o importmap e emitir eventos via WebSocket para a extensão do VSCode.
3. A extensão do VSCode poderá, então, identificar MFEs ativos e realizar overrides automáticos, além de outras integrações planejadas.

## Roadmap

- [ ] Implementar monitoramento do importmap.
- [ ] Adicionar emissão de eventos via WebSocket.
- [ ] Documentar exemplos de integração com a extensão do VSCode.
- [ ] Adicionar testes automatizados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

MIT
