# single-spa-devtools

## Overview

**single-spa-devtools** is a tool ecosystem designed to enhance the development of [single-spa](https://single-spa.js.org/) and microfrontend-based applications. The project is composed of two main integrated modules:

- **[single-spa-devtools-webpack-plugin](./packages/webpack-plugin/)**: A Webpack plugin that should be added to the `root-config` of single-spa projects. It monitors the application's importmap and emits events via WebSocket to the VSCode extension, enabling detection of active MFEs (Micro Frontends), automatic overrides, and other advanced integrations.
- **[single-spa-devtools VSCode Extension](./packages/vscode-extension/)**: A VSCode extension that connects to the Webpack plugin, providing a user-friendly interface to monitor, debug, and manage MFEs directly from the editor. It allows you to apply overrides, track events, receive real-time notifications, and much more.

## Main Features

- Real-time monitoring of active MFEs.
- Automatic and manual override of MFEs for easier testing and isolated development.
- Management and creation of override rules through the VSCode interface.
- Monitoring of single-spa ecosystem events (loading, updating, errors, etc).
- Debug tools, centralized logs, and real-time notifications.
- Dedicated panel in VSCode for interacting with MFEs and overrides.

## How Integration Works

1. The Webpack plugin is installed in the root-config of your single-spa project.
2. It monitors the importmap and sends information via WebSocket to the VSCode extension.
3. The extension displays, in real time, the status of MFEs, allows you to apply overrides, and provides tools to facilitate the development and debugging of microfrontends.

## Get Started

- See how to install and use the [Webpack plugin](./packages/webpack-plugin/README.md)
- See how to install and use the [VSCode extension](./packages/vscode-extension/README.md)

## Roadmap

- New integrations between plugin and extension
- Support for multiple environments
- Performance analysis tools
- Automatic override suggestions
- Export/import of configurations

## Contribute

Contributions are welcome! Feel free to open issues or pull requests in any of the packages.

## License

MIT
