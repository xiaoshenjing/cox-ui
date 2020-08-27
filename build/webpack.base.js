const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
    ],
  },
};
