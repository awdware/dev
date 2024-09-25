import base from "@awdware/eslint-config-base";
import globals from "globals";

export default [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
