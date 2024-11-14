# Welcome to ReTail!

<a href="https://www.secretmessag.es">
  <img alt="ReTail project image" src="https://github.com/user-attachments/assets/faa11cde-3eec-4bb9-b140-e369d8639bd4">
</a>

This template is a starting point for building a [Remix](https://remix.run) app with [Vite](https://vitejs.dev) and [Tailwind CSS](https://tailwindcss.com) and was built on top of `npx create-remix@latest` which you will find on [https://remix.run/docs/en/main/guides/vite](https://remix.run/docs/en/main/guides/vite).

See the [Remix Vite docs](https://remix.run/docs/en/main/future/vite), the [Vite docs](https://vitejs.dev/guide/) and the [Tailwind CSS docs](https://tailwindcss.com/docs/installation) for details on supported features.

## Features

- **Remix with Vite**: The latest version of Remix with Vite as the build tool. That means, instant server start, fast HMR, and optimized builds for your full-stack app.
- **Tailwind CSS**: Build your UI faster with the utility-first CSS framework.
- **Automatic wrapping of long class names**: This template enables automatic wrapping for long class names with [`prettier-plugin-classnames`](https://www.npmjs.com/package/prettier-plugin-classnames).
- **Automatic class sorting**: This template enables automatic class sorting with [`prettier-plugin-tailwindcss`](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).
- **Font optimization**: Preloaded local fonts with [Fontsource](https://fontsource.org/).
- **Format script**: Format all your files with `npm run format`.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

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

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
