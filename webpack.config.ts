import webpack from "webpack";
import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

type Mode = "production" | "development";

interface envVariables {
  mode: Mode;
  port: number;
}

export default (env: envVariables) => {
  const isDevMode = env.mode === "development";
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      clean: true,
      filename: "[name][contenthash].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDevMode ? "inline-source-map" : null,
    devServer: isDevMode
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : null,
  };
  return config;
};
