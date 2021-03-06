const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "main.js"
  },
  module: {
    strictExportPresence: true,
    rules: [
      { test: /\.(html)$/, loader: "raw-loader" ,},
      { test: /\.(js)$/,   loader: "babel-loader"}
    ]
  },
  devServer: {
    open: true,
    openPage: 'index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      filename: "index.html"
    }),
  ]
}