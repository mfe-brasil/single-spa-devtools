import { Compiler } from 'webpack';

export class SingleSpaDevtoolsWebpackPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.done.tap('SingleSpaDevtoolsWebpackPlugin', (stats) => {
      console.log('SingleSpaDevtoolsWebpackPlugin: Build is done!');
    });
  }
}

export default SingleSpaDevtoolsWebpackPlugin; 