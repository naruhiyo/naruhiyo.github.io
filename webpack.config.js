const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const environment = process.env.NODE_ENV || 'development'
const isProduction = environment === 'production'
const publicPath = isProduction ? 'build' : 'dist'
const resourcePath = `${publicPath}/public`

module.exports = {
  // If mode is 'production', the app is optimized.
  // If mode is 'development', javascript files output with adding source map.
  watch: !isProduction,
  mode: environment,
  devtool: isProduction ? false : 'source-map',
  entry: {
    'public/main': path.resolve(__dirname, 'src/main.tsx'),
  },
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      cacheGroups: {
        icon: {
          test: /node_modules\/grommet-icons/,
          name: 'public/icon',
          priority: -20,
          enforce: true,
        },
        grommet: {
          test: /node_modules\/grommet/,
          name: 'public/grommet',
          priority: -30,
          enforce: true,
        },
        vendor: {
          test: /node_modules/,
          name: 'public/vendor',
          chunks: 'initial',
          priority: -40,
          enforce: true,
        }
      }
    },
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: true,
      }), 
      new OptimizeCSSAssetsPlugin(),
    ],
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
        removeEmptyAttributes: true,
      },
      inject: true,
      chunksSortMode: 'dependency',
      favicon: path.resolve(__dirname, './favicon.ico'),
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
        'msapplication-TileColor': '#a1d8e6',
      }
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[chunkhash].css' : '[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/images'),
        to: path.resolve(__dirname, `${resourcePath}/images`)
      }
    ]),
    new WriteFileWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [{ loader: 'source-map-loader' }, { loader: 'babel-loader' }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: true,
                sourceMap: !isProduction,
              }
            },
            {
              loader: 'typed-css-modules-loader',
              options: {
                camelCase: true,
                searchDir: './src',
                outDir: './types',
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !isProduction,
                plugins: [autoprefixer()],
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        // test: /\.(png|jpe?g|gif|bmp|tiff|woff|eot|ttf|svg|ico)$/,
        test: /\.(jpg|png|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(yml|yaml)$/,
        use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
      },
    ],
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
}
