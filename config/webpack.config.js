const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const IgnoreAssetsPlugin = require('ignore-assets-webpack-plugin');
const toml = require('toml'); 
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: path.resolve(__dirname + './../src/index.js'),
  output: {
    path: path.resolve(__dirname + './../dist'),
    filename: 'v-weather-chipiona.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|webp|wav|mp3|ogg)$/, 
        use: "file-loader" 
      },
      {

        test: /\.(csv|tsv)$/,

        use: [

          'csv-loader',

        ],

      },

      {

        test: /\.xml$/,

        use: [

          'xml-loader',

        ],

      },
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
        /*
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets', //Will resolve to RepoDir/src/assets 
          to: 'assets' //Copies all files from above dest to dist/assets
        }
      ],
      options: {
        concurrency: 100,
      },
    }),
        */

    new IgnoreAssetsPlugin({
      //ignore: 'asset.js'
    })
  ]
}