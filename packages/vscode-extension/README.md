# Single SPA Devtools VSCode Extension

## Visão Geral

Esta extensão para o VSCode foi criada para potencializar o desenvolvimento de aplicações baseadas em [single-spa](https://single-spa.js.org/) e microfrontends. Ela se integra ao plugin Webpack do single-spa-devtools, permitindo monitorar, debugar e gerenciar MFEs (Micro Frontends) diretamente do seu editor.

## Funcionalidades

- **Monitorar MFEs:** Visualize em tempo real quais micro frontends estão ativos no ambiente de desenvolvimento.
- **Aplicar override de MFEs:** Faça override automático ou manual de MFEs, facilitando testes e desenvolvimento isolado de cada micro frontend.
- **Adicionar novos Overrides Manualmente:** Crie e gerencie regras de override diretamente pela interface da extensão.
- **Monitorar eventos:** Acompanhe eventos relevantes do ecossistema single-spa, como carregamento, atualização e erros de MFEs.
- **Debug:** Ferramentas para facilitar o debug de MFEs, incluindo logs, inspeção de importmap e status de MFEs.
- **Notificações em tempo real:** Receba alertas sobre mudanças no importmap, MFEs carregados/descarregados e conflitos de override.
- **Interface amigável:** Painel dedicado no VSCode para visualizar e interagir com MFEs e overrides.
- **Logs centralizados:** Visualize logs do plugin Webpack e da extensão em um único local.
- **Ações rápidas:** Comandos de atalho para reiniciar MFEs, limpar overrides e atualizar importmap.

## Instalação

1. Clone este repositório ou baixe o pacote da extensão.
2. No VSCode, pressione `F5` para abrir uma nova janela de desenvolvimento de extensões.
3. Siga as instruções para instalar a extensão localmente.

> Em breve: Disponível no marketplace do VSCode.

## Como usar

1. Certifique-se de que o plugin `single-spa-devtools-webpack` está instalado e configurado no seu root-config.
2. Inicie sua aplicação single-spa normalmente.
3. Abra o painel "Single SPA Devtools" no VSCode para visualizar e interagir com os MFEs e overrides.

## Roadmap

- [ ] Interface gráfica para gerenciamento de MFEs e overrides.
- [ ] Integração com logs e eventos do Webpack plugin.
- [ ] Suporte a múltiplos ambientes (dev, staging, prod).
- [ ] Ferramentas de análise de performance de MFEs.
- [ ] Sugestão automática de overrides baseada em histórico de desenvolvimento.
- [ ] Exportação/importação de configurações de override.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou novas funcionalidades.

## Licença

MIT
