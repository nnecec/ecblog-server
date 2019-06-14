module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "standard",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "rules": {
  }
};
