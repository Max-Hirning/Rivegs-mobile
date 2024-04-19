module.exports = {
  plugins: [
    ["module:react-native-dotenv"],
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
};
