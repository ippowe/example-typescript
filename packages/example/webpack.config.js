const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  return {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
