const functions = ["cn", "clsx", "cva"];

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  tailwindFunctions: functions,
  customFunctions: functions,
  endingPosition: "absolute-with-indent",
  tailwindStylesheet: "./app/app.css",
  plugins: [
    // https://www.nikolailehbr.ink/blog/tailwind-css-tips#Automatic-wrapping-of-long-class-names
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
};

export default config;
