const path = require('path')
// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    'our-ui': [path.join(__dirname, './demo/main.js')]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    chunkFilename: process.env.NODE_ENV === 'production' ? '[id].chunk.[hash].js' : '[id].chunk.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules| bower_components)/, // 为了增加构造速度
        loader: 'babel-loader?cacheDirectory=true'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./vendor/manifest.json')
    // }),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name].min.css' : '[name].css',
      chunkFilename: process.env.NODE_ENV === 'production' ? '[id].chunk.[hash].css' : '[id].chunk.css'
    }),
    new VueLoaderPlugin()
  ]
}
