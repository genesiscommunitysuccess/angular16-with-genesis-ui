import path from 'path';
import { fileURLToPath } from 'url';
import { resolveDefineConfig } from '@genesislcap/build-kit';
import webpack from 'webpack';
import './load.env.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  /**
   * Replace env vars in code.
   */
  plugins: [
    new webpack.DefinePlugin(resolveDefineConfig(['API_HOST', 'GENX_*'])),
  ],
  /**
   * Add file loaders to process the ESM bundles. Note: we should review MFs as pre-built bundles.
   */
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'node_modules/@genesislcap'),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
            },
          },
        ],
      }
    ],
  },
  /**
   * Ensure webpack handles module loading strictly to allow module federation fallbacks.
   */
  output: {
    strictModuleErrorHandling: true,
    strictModuleExceptionHandling: true,
  },
  /**
   * Mark the 'foundationZero/ZeroDesignSystem' module federated remote as external.
   */
  externals: {
    'foundationZero/ZeroDesignSystem': 'foundationZero/ZeroDesignSystem',
  },
};
