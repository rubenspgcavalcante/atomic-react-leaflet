const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode =
  {
    production: "production",
    development: "development"
  }[process.env.NODE_ENV] || "production";

module.exports = {
  mode,
  devtool: "source-map",
  entry: {
    main: mode === "development" ? "./dev-env/index.jsx" : "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"]
      }
    ]
  },
  externals:
    mode === "production"
      ? {
          leaflet: "leaflet",
          React: "react"
        }
      : {},
  resolve: {
    modules: ["node_modules", resolve(__dirname, "./src")],
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".json"]
  },
  plugins: [mode === "development" && new HtmlWebpackPlugin()].filter(p => p),
  devServer: {
    contentBase: join(__dirname, "./dev-env")
  }
};
