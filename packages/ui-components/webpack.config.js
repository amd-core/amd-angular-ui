const Merge = require('deepmerge');
const Path = require('path');
const NodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PackageRoot = Path.join(__dirname);
function FromPackageRoot(...paths) {
  return Path.join(PackageRoot, ...paths);
}

const ProjectRoot = FromPackageRoot('..', '..');
function FromProjectRoot(...paths) {
  return Path.join(ProjectRoot, ...paths);
}

const BuildRoot = FromProjectRoot('build', 'amd-angular-ui');
function FromBuildRoot(...paths) {
  return Path.join(BuildRoot, ...paths);
}

const ResetUIThemeRoot = FromProjectRoot('packages', 'reset-ui-theme');
const ExtractResetUITheme = new ExtractTextPlugin('reset-ui-theme.css');

const BaseUIThemeRoot = FromProjectRoot('packages', 'base-ui-theme');
const ExtractBaseUITheme = new ExtractTextPlugin('base-ui-theme.css');

const CommonConfig = {
  target: 'web',

  entry: {
    'amd-angular-ui': FromPackageRoot('components', 'index')
  },

  output: {
    path: BuildRoot,
    library: 'amd-angular-ui'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  externals: [NodeExternals({
    whitelist: [

    ],
    modulesFromFile: true
  })],

  plugins: [
    new CopyWebpackPlugin([
      {
        from: FromPackageRoot('package.json'),
        to: FromBuildRoot('package.json')
      },
      {
        from: FromPackageRoot('README.md'),
        to: FromBuildRoot('README.md')
      }
    ]),
    new CleanWebpackPlugin([BuildRoot], {
      root: ProjectRoot
    }),
    ExtractResetUITheme,
    ExtractBaseUITheme
  ],

  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.ts$/,
      use: [
        'ts-loader',
        'angular2-template-loader',
        {
          loader: 'tslint-loader',
          query: {
            emitErrors: true,
            failOnHint: true,
            typeCheck: true,
            tsConfigFile: FromPackageRoot('tsconfig.json')
          }
        }
      ]
    }, {
      test: /\.scss$/,
      include: BaseUIThemeRoot,
      use: ExtractBaseUITheme.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.scss$/,
      include: ResetUIThemeRoot,
      use: ExtractResetUITheme.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  }
};

module.exports = [
  Merge(CommonConfig, {
    output: {
      filename: '[name].umd.js',
      libraryTarget: 'umd'
    }
  })
];