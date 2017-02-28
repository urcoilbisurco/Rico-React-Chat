
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module:{
    rules:[
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(jpg|png)$/, loader: "file-loader"},
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {loader:'css-loader',options: { modules: true }},
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
