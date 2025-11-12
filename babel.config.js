module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      require("babel-preset-expo"),
      require("@babel/preset-typescript"),
    ],
    plugins: [
      [require("@babel/plugin-transform-modules-commonjs"), { loose: false }],
    ],
  };
};
