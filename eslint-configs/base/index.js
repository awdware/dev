module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "no-unused-vars": [
      "off"
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn"
    ],
    "curly": "warn",
    "@typescript-eslint/prefer-readonly": [
      "warn"
    ],
    "max-len": [
      "warn",
      180
    ],
    "prefer-template": "warn"
  }
};
