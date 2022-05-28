/* eslint-disable no-undef */
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// local variables
const environment = process.env.NODE_ENV || 'development'
const isProduction = environment === 'production'
const publicPath = isProduction ? 'build' : 'dist'
const resourcePath = `${publicPath}/public`

module.exports = {
  // If mode is 'production', the app is optimized.
  // If mode is 'development', javascript files output with adding source map.
  watch: !isProduction,
  mode: environment,
  devtool: isProduction ? false : 'inline-source-map',
  entry: {
    'public/main': path.resolve(__dirname, 'src/main.tsx'),
  },
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    clean: true,
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
        },
      },
    },
    minimizer: [new OptimizeCSSAssetsPlugin()],
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
      '.ico',
    ],
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
      chunksSortMode: 'auto',
      favicon: path.resolve(__dirname, './favicon.ico'),
      meta: {
        title: 'NaruHiyo Pages',
        keywords: 'NaruHiyo, Github Pages, Portfolio',
        author: 'narugit, hiyoko3',
        description: 'Naruhiyo is a project to develop some application such as mobile, desktop, webapp.',
        'theme-color': '#a1d8e6',
        'format-detection': 'telephone=no', //- Disabled phone number (iOS)
        //- /* ==== Windows Theme ==== */
        'msapplication-TileImage': '',
        'msapplication-TileColor': '#a1d8e6',
      },
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, `${resourcePath}/images`),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
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
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // test: /\.(png|jpe?g|gif|bmp|tiff|woff|eot|ttf|svg|ico)$/,
        test: /\.(jpg|png|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.ya?ml$/,
        use: [{ loader: 'yaml-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    compress: true, // Enable gzip compression for everything served:
    host: '0.0.0.0',
    port: 7777, // port number
    static: {
      directory: path.join(__dirname, 'dist/'), // Document root on server
    },
    client: {
      progress: false, // Show progress on console.
      overlay: true, // show error when there are compiler errors or warnings.
      logging: 'info', // A log level(none, error, warning, info)
    },
    historyApiFallback: true,
  },
}
