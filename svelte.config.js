import { createHighlighter } from "@bitmachina/highlighter";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('mdsvex').MdsvexOptions}*/
const mdsvexOptions = {
	extension: '.md',
	highlight: {
		highlighter: await createHighlighter({ theme: "poimandres" }),
	  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;