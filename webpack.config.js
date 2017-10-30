const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: ["./src/ReactEntryPoint.js"],
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.node$/,
        use: "node-loader"
      }
    ]
  },
  plugins: [new webpack.ExternalsPlugin("commonjs", ["leveldown"])]
};
