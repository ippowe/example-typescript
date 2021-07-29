const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "../dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
    ],
  };
};
