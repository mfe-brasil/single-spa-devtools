# single-spa-devtools

## Visão Geral

O **single-spa-devtools** é um ecossistema de ferramentas para potencializar o desenvolvimento de aplicações baseadas em [single-spa](https://single-spa.js.org/) e microfrontends. O projeto é composto por dois principais módulos integrados:

- **[single-spa-devtools-webpack-plugin](./packages/webpack-plugin/)**: Um plugin para Webpack que deve ser adicionado ao `root-config` de projetos single-spa. Ele monitora o importmap da aplicação e emite eventos via WebSocket para a extensão do VSCode, permitindo identificar MFEs (Micro Frontends) ativos, realizar overrides automáticos e outras integrações avançadas.
- **[single-spa-devtools VSCode Extension](./packages/vscode-extension/)**: Uma extensão para o VSCode que se conecta ao plugin Webpack, oferecendo uma interface amigável para monitorar, debugar e gerenciar MFEs diretamente do editor. Permite aplicar overrides, acompanhar eventos, receber notificações em tempo real e muito mais.

## Principais Funcionalidades

- Monitoramento em tempo real dos MFEs ativos.
- Override automático e manual de MFEs para facilitar testes e desenvolvimento isolado.
- Gerenciamento e criação de regras de override pela interface do VSCode.
- Monitoramento de eventos do ecossistema single-spa (carregamento, atualização, erros, etc).
- Ferramentas de debug, logs centralizados e notificações em tempo real.
- Painel dedicado no VSCode para interação com MFEs e overrides.

## Como funciona a integração

1. O plugin Webpack é instalado no root-config do seu projeto single-spa.
2. Ele monitora o importmap e envia informações via WebSocket para a extensão do VSCode.
3. A extensão exibe, em tempo real, o status dos MFEs, permite aplicar overrides e oferece ferramentas para facilitar o desenvolvimento e debug de microfrontends.

## Comece agora

- Veja como instalar e usar o [plugin Webpack](./packages/webpack-plugin/README.md)
- Veja como instalar e usar a [extensão VSCode](./packages/vscode-extension/README.md)

## Roadmap

- Novas integrações entre plugin e extensão
- Suporte a múltiplos ambientes
- Ferramentas de análise de performance
- Sugestão automática de overrides
- Exportação/importação de configurações

## Contribua

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests em qualquer um dos pacotes.

## Licença

MIT
