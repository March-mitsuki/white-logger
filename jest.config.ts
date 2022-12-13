import { Config } from "@jest/types";

// オプションを設定
const config: Config.InitialOptions = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
  testEnvironment: "node",
  collectCoverage: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};

// 設定を default エクスポートします
export default config;
