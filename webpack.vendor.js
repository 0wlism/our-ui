const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router']
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, './vendor'),
    filename: '[name].js',
    library: "[name]_[hash]"
  },
  module: {
    rules: [
       {
         test: /\.css$/,
         use: [
            'style-loader',
            'css-loader'
         ]
       }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './vendor', "manifest.json"),
      name: "[name]_[hash]"
    })
  ]
}
