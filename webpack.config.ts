import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

type Mode = "production" | "development";

interface envVariables {
  mode: Mode;
}

export default (env: envVariables) => {
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
  };
  return config;
};
