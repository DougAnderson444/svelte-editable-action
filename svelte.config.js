import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapterStatic({
			// puts our build in the docs folder for github pages
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: {
			default: true
		},
		vite: {
			resolve: {
				alias: {
					'@douganderson444/svelte-editable-action': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
