<a href="https://retail.nikolailehbr.ink/">
  <img alt="ReTail project image" src="https://github.com/user-attachments/assets/8ef8b5dd-0d1b-4d26-b19a-5e651cd0f51e">
  <h1 align="center">ReTail</h1>
</a>

<p align="center">
A refined Remix starter template with improved defaults for building full-stack web applications.
</p>

<p align="center">
  <a href="#why"><strong>Why</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#development"><strong>Development</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a>
</p>
<br/>

## Why

When I first started using the [official Remix template with Vite](https://github.com/remix-run/remix/tree/main/templates/remix), it lacked built-in support for Tailwind CSS. Setting up a new project meant repeatedly installing and configuring it manually. To streamline this process, I created my own starter template: **ReTail** (Remix + Tailwind).

Since then, the official Remix template has added Tailwind CSS support. However, I continue to use ReTail to define better defaults, include ESLint 9, and integrate helpful utilities that make working with Tailwind CSS and other packages more efficient.

## Features

- **Remix with Vite**: The latest version of Remix with Vite as the build tool. That means, instant server start, fast HMR, and optimized builds for your full-stack app.
- **Tailwind CSS**: Build your UI faster with the utility-first CSS framework.
- **Automatic wrapping of long class names**: This template enables automatic wrapping for long class names with [`prettier-plugin-classnames`](https://www.npmjs.com/package/prettier-plugin-classnames).
- **Automatic class sorting**: This template enables automatic class sorting with [`prettier-plugin-tailwindcss`](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).
- **Font optimization**: Preloaded local fonts with [Fontsource](https://fontsource.org/).
- **Format script**: Format all your files with `npm run format`.
- **ESLint Inspector**: Ensure consistent code with ESLint 9 and the [ESLint Config Inspector](https://eslint.org/blog/2024/04/eslint-config-inspector/).

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

This will automatically open the app in your default browser and expose the host IP to your network, enabling better testing on devices like smartphones.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
