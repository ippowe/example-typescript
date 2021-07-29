const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypescript = require("react-refresh-typescript");

const baseConfig = require("./webpack.config");

module.exports = () => {
  return merge(baseConfig(), {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-typescript",
                  "@babel/preset-react",
                ],
                plugins: [require.resolve("react-refresh/babel")],
              },
            },
            {
              loader: require.resolve("ts-loader"),
              options: {
                configFile: path.resolve(__dirname, "./tsconfig.json"),
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypescript()],
                }),
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  });
};
