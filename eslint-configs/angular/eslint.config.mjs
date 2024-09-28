import base from "@awdware/eslint-config-base";
import angular from "angular-eslint";

export default [
  {
    ignores: ["**/*.spec.ts", "**/test.ts"],
  },
  ...base,
  ...angular.configs.tsRecommended,
  {
    files: ["**/*.ts"],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          style: "camelCase",
        },
      ],

      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          style: "kebab-case",
        },
      ],

      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Component"],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    ...angular.configs.templateRecommended,
    ...angular.configs.templateAccessibility,
  },
];
