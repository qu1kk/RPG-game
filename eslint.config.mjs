import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        console: "readonly",
        Math: "readonly"
      }
    },
    plugins: {
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];