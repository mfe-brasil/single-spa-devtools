import { Compiler, sources, Compilation } from 'webpack';
import { PluginOptions } from './types';
import { injectedCodeTemplate } from './injectedCodeSource';

const WEBSOCKET_URL = 'ws://127.0.0.1:9764';

function getInjectedCode(orgName: string, projectName: string, mfeFile: string) {
  let code = injectedCodeTemplate.toString();
  code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
  code = code
    .replace(/__WEBSOCKET_URL__/g, WEBSOCKET_URL)
    .replace(/__ORG_NAME__/g, orgName)
    .replace(/__PROJECT_NAME__/g, projectName)
    .replace(/__MFE_FILE__/g, mfeFile);
  return code;
}

export class SingleSpaDevtoolsWebpackPlugin {
  private orgName: string;
  private projectName: string;

  constructor(options: PluginOptions) {
    if (!options.orgName) throw new Error('SingleSpaDevtoolsWebpackPlugin: orgName is required');
    if (!options.projectName) throw new Error('SingleSpaDevtoolsWebpackPlugin: projectName is required');
    this.orgName = options.orgName;
    this.projectName = options.projectName;
  }

  apply(compiler: Compiler) {
    const pluginName = SingleSpaDevtoolsWebpackPlugin.name;
    
    const singleSpaConfig = compiler.options as any;
    const orgName = singleSpaConfig.orgName || this.orgName;
    const projectName = singleSpaConfig.projectName || this.projectName;
    
    compiler.hooks.thisCompilation.tap(pluginName, (compilation: Compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
        },
        (assets: any) => {
          const mfeFile = Object.keys(assets).find(name => name.endsWith('.js'));
          if (!mfeFile) {
            console.log('[SingleSpaDevtoolsWebpackPlugin] Nenhum asset .js encontrado!');
            return;
          }

          compilation.updateAsset(
            mfeFile,
            (source: sources.Source) => {
              const injectedCode = getInjectedCode(orgName, projectName, mfeFile);
              return new sources.ConcatSource(
                source,
                new sources.RawSource(injectedCode)
              );
            }
          );
        }
      );
    });
  }
}

export default SingleSpaDevtoolsWebpackPlugin; 