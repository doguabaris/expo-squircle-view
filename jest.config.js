const preset = require("expo-module-scripts/jest-preset-cli");

module.exports = {
  ...preset,
  transform: {
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      { configFile: require.resolve("./babel.config.js") },
    ],
  },
};
