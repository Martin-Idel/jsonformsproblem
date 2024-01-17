module.exports = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/tests/unit/setup.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/", "<rootDir>/"],
  testMatch: ["<rootDir>/tests/unit/**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx|mjs)$": "@swc/jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleNameMapper: {
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: [
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(vuetify|@jsonforms\\/core|@jsonforms\\/vue|@jsonforms\\/vue-vuetify))",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  resetMocks: true,
};
