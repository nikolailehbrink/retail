import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ReTail - Build full-stack apps faster" },

    {
      name: "description",
      content:
        "Remix starter template that makes starting a new full-stack app a breeze.",
    },
  ];
};

export default function Index() {
  return (
    <div
      className="container mx-auto flex min-h-dvh flex-col items-center
        justify-center gap-8 overflow-x-hidden px-4 pb-8 pt-16 text-neutral-400
        sm:pt-8"
    >
      <div className="relative">
        <div
          className="absolute -inset-16 -z-20 rounded-full bg-white opacity-5
            blur-3xl"
        ></div>
        <h1
          className="bg-gradient-to-br from-neutral-200 to-neutral-400
            bg-clip-text text-center text-4xl font-bold leading-tight
            tracking-tight text-transparent sm:text-5xl lg:text-6xl"
        >
          Build full-stack apps <br /> faster with{" "}
          <span className="relative text-[105%]">
            <span
              className="absolute -z-10 bg-gradient-to-br from-sky-300
                via-sky-500 to-sky-700 bg-clip-text text-transparent opacity-40
                blur-md"
            >
              ReTail
            </span>
            <span
              className="bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700
                bg-clip-text text-transparent"
            >
              ReTail
            </span>
          </span>
        </h1>
      </div>
      <p className="max-w-2xl text-center sm:text-xl">
        A quick starter template for building full-stack web applications with{" "}
        <a
          href="https://remix.run/"
          className="border-b-2 border-neutral-400 text-neutral-300
            hover:border-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remix
        </a>
        ,{" "}
        <a
          href="https://vitejs.dev"
          className="border-b-2 border-neutral-400 text-neutral-300
            hover:border-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          className="border-b-2 border-neutral-400 text-neutral-300
            hover:border-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          className="border-b-2 border-neutral-400 text-neutral-300
            hover:border-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
      </p>
      <div className="my-4 flex flex-wrap justify-center gap-2 sm:my-8">
        <a
          href="https://github.com/nikolailehbrink/retail"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border-2
            border-neutral-700 bg-neutral-900 px-3 py-2 text-neutral-200
            transition-colors hover:border-neutral-300 hover:bg-neutral-800
            hover:text-neutral-50"
        >
          See README
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M48,72h64V184H48ZM190.64,38.39a8,8,0,0,0-9.5-6.21l-46.81,10a8.07,8.07,0,0,0-6.15,9.57L139.79,107l62.46-13.42Z"
              opacity="0.2"
            ></path>
            <path d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/new?template_name=retail&template_owner=nikolailehbrink"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border-2
            border-neutral-950/50 bg-sky-400 px-3 py-2 text-neutral-950
            transition-colors hover:border-neutral-200 hover:bg-sky-500"
        >
          Use the template
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
              opacity="0.2"
            ></path>
            <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
          </svg>
        </a>
      </div>
      <div
        className="-mx-4 max-w-5xl columns-1 text-balance rounded-3xl border
          border-neutral-800 bg-gradient-to-br from-neutral-900/50
          via-neutral-900/25 to-neutral-800/75 p-4 max-sm:rounded-b-none
          sm:columns-2 lg:columns-3"
      >
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="mt-4 break-inside-avoid rounded-2xl border
              border-neutral-800 bg-gradient-to-br from-neutral-900/50
              to-neutral-800/50 p-2 first:mt-0"
          >
            <div
              className="h-full rounded-xl border-2 border-neutral-800
                bg-neutral-950 p-4"
            >
              <h2 className="text font-bold leading-snug text-neutral-200">
                {title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="leading-normal [&>code]:rounded-md
                  [&>code]:bg-neutral-800 [&>code]:px-1 [&>code]:py-0.5
                  [&>code]:text-sm"
              ></p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Built by {""}
        <a
          href="https://www.nikolailehbr.ink/"
          className="border-b-2 border-neutral-400 text-neutral-300
            hover:border-neutral-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nikolai Lehbrink
        </a>
      </p>
    </div>
  );
}

const features = [
  {
    title: "Remix",
    description: "A full-stack web framework focused on modern web standards.",
  },
  {
    title: "TypeScript",
    description: "Ensures type safety throughout, even in configuration files.",
  },
  {
    title: "Tailwind CSS",
    description:
      "The latest version of the utility-first CSS framework.",
  },
  {
    title: "Vite",
    description:
      "Next-gen frontend tooling that's highly extensible via plugins.",
  },
  {
    title: "ESLint",
    description: "Configurable linting utility to ensure code consistency.",
  },
  {
    title: "Automatic class name wrapping",
    description:
      "Wraps long Tailwind class names based on Prettier's <code>printWidth</code> setting.",
  },
  {
    title: "Automatic class sorting",
    description:
      "Automatically sorts Tailwind classes and removes extra spaces.",
  },
  {
    title: "Format script",
    description:
      "Automatically formats files with a single <code>npm run format</code> command.",
  },
  {
    title: "Fonts",
    description:
      "Efficient font loading with <code>Fontsource</code> and optimized preloading.",
  },
];
