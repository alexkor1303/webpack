export type BuildMode = "production" | "development";

export interface buildPath {
  entry: string;
  html: string;
  output: string;
}

export interface buildOptions {
  port: number;
  paths: buildPath;
  mode: BuildMode;
}
