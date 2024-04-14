module.exports = {
  "env": {
    "es2021": true,
    "browser": true,
  },
  "rules": {
    // "no-console": 2,
    "indent": ["error", 2],
    "prettier/prettier": 0,
    "space-before-blocks": 2,
    "semi": ["error", "always"],
    "no-multi-spaces": ["error"],
    "quotes": ["error", "double"],
    "keyword-spacing": ["error", {
      before: true,
      after: true,
      overrides: {
        if: {after: false},
        for: {after: false},
      },
    }],
    "linebreak-style": ["error", "windows"],
    "object-curly-spacing": ["error", "never"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/space-before-blocks": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
  },
  root: true,
  "extends": [
    "@react-native",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest",
  },
  "parser": "@typescript-eslint/parser",
};
