# Single SPA Webpack Plugin

## Overview

This project is a Webpack plugin designed to be used in the `root-config` of projects that use [single-spa](https://single-spa.js.org/). Its main goal is to monitor the application's importmap and emit events via WebSocket to the VSCode extension, allowing the extension to detect running micro frontends (MFEs), perform automatic overrides, and enable other features related to single-spa and microfrontend ecosystems.

## Features

- **Importmap monitoring:** Watches for changes in the project's importmap.
- **WebSocket communication:** Emits events to the VSCode extension, enabling integrations and automations.
- **Active MFE detection:** Allows the extension to identify running MFEs and perform automatic overrides.
- **Foundation for future features:** Ready to expand with more single-spa and microfrontend-related capabilities.

> **Note:** The initial implementation of the plugin only logs a message to the console at the end of the build. WebSocket and importmap monitoring features will be implemented in future versions.

## Installation

Add the plugin to your project:

```bash
npm install --save-dev single-spa-devtools-webpack
# or
pnpm add -D single-spa-devtools-webpack
```

## Usage

In your root-config's `webpack.config.js`:

```js
const { SingleSpaDevtoolsWebpackPlugin } = require('single-spa-devtools-webpack');

module.exports = {
  // ... your webpack config ...
  plugins: [
    new SingleSpaDevtoolsWebpackPlugin(),
  ],
};
```

## How it works

1. The plugin is imported and added to the Webpack plugins list in your single-spa root-config.
2. At the end of the build process, the plugin will (in the future) monitor the importmap and emit events via WebSocket to the VSCode extension.
3. The VSCode extension can then identify active MFEs and perform automatic overrides, as well as other planned integrations.

## Roadmap

- [ ] Implement importmap monitoring.
- [ ] Add WebSocket event emission.
- [ ] Document integration examples with the VSCode extension.
- [ ] Add automated tests.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

MIT
