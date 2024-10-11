import base from "@awdware/eslint-config-base";
import angular from "angular-eslint";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["**/*.ts"],
    ignores: ["**/eslint.config.mjs"],
    extends: [...base, ...angular.configs.tsRecommended],
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
    files: ["**/*component.html"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: [
      // Apply the recommended Angular template rules
      ...angular.configs.templateRecommended,
      // Apply the Angular template rules which focus on accessibility of our apps
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  {
    files: ["**/*.html"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  }
);
