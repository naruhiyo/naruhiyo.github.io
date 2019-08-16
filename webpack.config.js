const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';
const isProduction = environment === 'production';
const publicPath = isProduction ? 'public/images' : 'dist/public/images'

module.exports = {
  // If mode is "production", the app is optimized.
  // If mode is "development", javascript files output with adding source map.
  watch: !isProduction,
  mode: environment,
  devtool: isProduction ? false : 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/main.tsx')
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
      '.css',
      '.scss',
      '.jpg',
      '.jpeg',
      '.gif',
      '.png',
      '.bmp',
      '.tiff',
      'woff',
      'eot',
      'ttf',
      '.svg',
      '.ico'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        html5: true,
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      inject: true,
      chunksSortMode: 'dependency',
      meta: {
        title: 'NaruHiyo Pages',
        keywords: 'NaruHiyo, Github Pages, Portfolio',
        author: 'narugit, hiyoko3',
        description:
          'Naruhiyo is a project to develop some application such as mobile, desktop, webapp.',
        'theme-color': '#a1d8e6',
        'format-detection': 'telephone=no', //- Disabled phone number (iOS)
        //- /* ==== Windows Theme ==== */
        'msapplication-TileImage': '',
        'msapplication-TileColor': '#a1d8e6'
      }
    }),
    new ExtractTextPlugin({
      filename: isProduction ? "[name].[chunkhash].css" : "[name].css",
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname, 'src/assets/images'), 
        to: path.resolve(__dirname, publicPath)
      },
    ]),
    new WriteFileWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: true,
                sourceMap: !isProduction
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true,
                searchDir: './src',
                outDir: './types'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProduction,
                plugins: [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        // test: /\.(png|jpe?g|gif|bmp|tiff|woff|eot|ttf|svg|ico)$/,
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(yml|yaml)$/,
        use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 7777, // port number
    contentBase: path.join(__dirname, 'dist/'), // Document root on server
    progress: false, // Show progress on console.
    inline: true, // The mode of inline.
    hot: false, // use HMR
    clientLogLevel: 'info', // The log level(none, error, warning, info)
    historyApiFallback: true
  }
};
