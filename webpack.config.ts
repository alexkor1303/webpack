import webpack from "webpack";
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, buildPath } from "./config/types/types";

interface envVariables {
  mode: BuildMode;
  port: number;
}

export default (env: envVariables) => {
  const paths: buildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });
  return config;
};
