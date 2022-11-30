const jest = require("next/jest");

const createJestConfig = jest({
  dir: "./",
});

module.exports = createJestConfig({
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/ui/(.*)$": "<rootDir>/ui/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
});
