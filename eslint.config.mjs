import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**"]
  },
  {
    languageOptions: {
      globals: {
        console: "readonly"
      }
    },
    plugins: {
      extends: ["airbnb-base/legacy"]
    }
  }
];