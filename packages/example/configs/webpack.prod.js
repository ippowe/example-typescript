const { merge } = require("webpack-merge");
const base = require("./webpack.config")();

module.exports = () => {
  return merge(base, {
    mode: "production",
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vender: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/i,
          use: ["babel-loader", "ts-loader"],
          exclude: /node_modules/,
        },
      ],
    },
  });
};
