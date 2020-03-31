const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    'our-ui': path.join(__dirname, './demo/main.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
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
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name].min.css' : '[name].css',
      chunkFilename: process.env.NODE_ENV === 'production' ? '[id].min.[hash].css' : '[id].css'
    }),
    new VueLoaderPlugin()
  ]
}
