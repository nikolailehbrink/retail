import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import importX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    name: "custom/ignores",
    ignores: ["!**/.server", "!**/.client"],
  },
  {
    name: "eslint/recommended",
    ...eslint.configs.recommended,
  },
  importX.flatConfigs.recommended,
  {
    name: "import-x/typescript",
    ...importX.flatConfigs.typescript,
  },
  jsxA11y.flatConfigs.recommended,
  {
    name: "react/recommended",
    ...react.configs.flat.recommended,
  },
  {
    name: "react/jsx-runtime",
    ...react.configs.flat["jsx-runtime"],
  },
  {
    name: "custom/project",
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
      "import/resolver": {
        typescript: {},
      },
    },
  },
  ...tseslint.configs.recommended,
);
