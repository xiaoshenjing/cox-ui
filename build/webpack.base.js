const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/test.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "lib"),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
      { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.vue$/, use: ["vue-loader"] },
    ],
  },
  devServer: {
    port: 8000,
    host: "0.0.0.0",
    overlay: {
      erros: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template/index.html",
      inject: true,
    }),
    new VueLoaderPlugin(),
  ],
};
