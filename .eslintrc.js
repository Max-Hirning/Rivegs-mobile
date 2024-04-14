module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
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
        for: {after: false}
      }
    }],
    "linebreak-style": ["error", "windows"],
    "object-curly-spacing": ["error", "never"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/space-before-blocks": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
  }
};
