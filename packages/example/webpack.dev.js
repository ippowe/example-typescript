const { merge } = require("webpack-merge");
const path = require("path");

const baseConfig = require("./webpack.config");

module.exports = () => {
  return merge(baseConfig(), {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
    },
  });
};
