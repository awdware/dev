import globals from "globals";
import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";

import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/eslint.config.mjs"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.name,
        allowDefaultProject: true,
      },
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      indent: "off",
      quotes: "off",
      semi: ["error", "always"],

      // Unused vars & imports
      "no-unused-vars": ["off"],
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      curly: "error",
      "@typescript-eslint/prefer-readonly": ["error"],
      "max-len": "off",
      "prefer-template": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // import plugin
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      "import/no-duplicates": "error",
    },
  },
];
