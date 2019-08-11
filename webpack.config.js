const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // If mode is "production", the app is optimized.
  // If mode is "development", javascript files output with adding source map.
  watch: !isProduction,
  mode: environment,
  devtool: isProduction ? false : 'source-map',
  entry: {
    main: [path.resolve(__dirname, 'src/main.tsx')]
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
    ],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
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
    })
  ],
  output: {
    path: __dirname + '/dist',
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
                outDir: './typings'
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
        test: /\.(png|jpe?g|gif|bmp|tiff|woff|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]'
            }
          }
        ]
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
