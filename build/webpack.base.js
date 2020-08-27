const path = require("path")

module.exports = {
  entry: ".。/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
      { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ }
    ]
  }
}
