const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      },
    ],
  },
  testMatch: ["**/dist/runAll.test.ts"],
};
