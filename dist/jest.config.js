const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
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
