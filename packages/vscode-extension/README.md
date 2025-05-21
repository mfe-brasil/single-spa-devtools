# Single SPA Devtools VSCode Extension

## Overview

This VSCode extension was created to enhance the development of [single-spa](https://single-spa.js.org/) and microfrontend-based applications. It integrates with the single-spa-devtools Webpack plugin, allowing you to monitor, debug, and manage MFEs (Micro Frontends) directly from your editor.

## Features

- **Monitor MFEs:** See in real time which micro frontends are active in your development environment.
- **Apply MFE overrides:** Automatically or manually override MFEs, making it easier to test and develop each micro frontend in isolation.
- **Add new manual overrides:** Create and manage override rules directly from the extension interface.
- **Monitor events:** Track relevant events in the single-spa ecosystem, such as loading, updating, and MFE errors.
- **Debug:** Tools to help debug MFEs, including logs, importmap inspection, and MFE status.
- **Real-time notifications:** Get alerts about importmap changes, MFEs being loaded/unloaded, and override conflicts.
- **User-friendly interface:** Dedicated panel in VSCode to view and interact with MFEs and overrides.
- **Centralized logs:** View logs from both the Webpack plugin and the extension in one place.
- **Quick actions:** Shortcut commands to restart MFEs, clear overrides, and update the importmap.

## Installation

1. Clone this repository or download the extension package.
2. In VSCode, press `F5` to open a new Extension Development Host window.
3. Follow the instructions to install the extension locally.

> Coming soon: Available on the VSCode marketplace.

## How to use

1. Make sure the `single-spa-devtools-webpack` plugin is installed and configured in your root-config.
2. Start your single-spa application as usual.
3. Open the "Single SPA Devtools" panel in VSCode to view and interact with MFEs and overrides.

## Roadmap

- [ ] Graphical interface for managing MFEs and overrides.
- [ ] Integration with logs and events from the Webpack plugin.
- [ ] Support for multiple environments (dev, staging, prod).
- [ ] MFE performance analysis tools.
- [ ] Automatic override suggestions based on development history.
- [ ] Export/import override configurations.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests with suggestions, fixes, or new features.

## License

MIT
