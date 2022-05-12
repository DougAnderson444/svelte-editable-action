// import adapter from "@sveltejs/adapter-auto"
import adapter from "@sveltejs/adapter-static"

import preprocess from "svelte-preprocess"
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            fallback: "index.html", // makes us an index.html file
            pages: "docs", // puts our build in the docs folder for github pages
            assets: "docs",
        }),
        prerender: {
            default: true,
        },
        paths: {
            // change below to your repo name
            base:
                process.env.NODE_ENV === "development"
                    ? ""
                    : "/svelte-editable-action",
        },
        vite: {
            resolve: {
                alias: {
                    "@douganderson444/svelte-editable-action":
                        path.resolve("src/lib"),
                },
            },
        },
    },
}

export default config
