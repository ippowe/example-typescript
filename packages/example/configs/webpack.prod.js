const path = require("path");
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
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-typescript",
                  "@babel/preset-react",
                ],
              },
            },
            {
              loader: require.resolve("ts-loader"),
              options: {
                configFile: path.resolve(__dirname, "./tsconfig.json"),
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  });
};
