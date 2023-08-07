import { Configuration } from "webpack";
import path from "path";

const config: Configuration = {
  resolve: {
    extensions: [".ts"]
  },
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'index.js', // 输出文件名
    library: '@white-logger/browser', // 你的库的全局变量名（如果在浏览器环境中使用）
    libraryTarget: 'umd', // 指定库的目标环境，'umd' 表示可以在 CommonJS、AMD 和全局变量等环境中使用
    globalObject: 'this' // 全局对象，'this' 表示在各种环境中都可用（Node.js、浏览器等）
  },
  externals: {
    "luxon": "luxon",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      }
    ]
  }
};

module.exports = config;
