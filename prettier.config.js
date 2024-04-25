/** @type {import("prettier").Config} */
const functions = ["cn", "clsx"];
const config = {
  tailwindFunctions: functions,
  customFunctions: functions,
  endingPosition: "absolute-with-indent",
  plugins: [
    // https://www.nikolailehbr.ink/blog/tailwind-css-tips#Automatic-wrapping-of-long-class-names
    "prettier-plugin-classnames",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-merge",
  ],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
};

export default config;
