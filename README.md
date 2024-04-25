# Welcome to ReTail!

This template is a starting point for building a [Remix](https://remix.run) app with [Vite](https://vitejs.dev) and [Tailwind CSS](https://tailwindcss.com) and was built on top of `npx create-remix@latest` found on [https://remix.run/docs/en/main/guides/vite](https://remix.run/docs/en/main/guides/vite).

📖 See the [Remix docs](https://remix.run/docs), the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) and the [Tailwind CSS docs](https://tailwindcss.com/docs/installation) for details on supported features.

This template enables automatic wrapping for long class names and class sorting with [`prettier-plugin-classnames`](https://www.npmjs.com/package/prettier-plugin-classnames) and [`prettier-plugin-tailwindcss`](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).

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
