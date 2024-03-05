/** @type {import("prettier").Config} */
const config = {
  tailwindFunctions: ["cn", "clsx"],
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
};

export default config;
