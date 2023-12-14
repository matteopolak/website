import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex, escapeSvelte } from "mdsvex";
import shiki from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({
			extension: '.md',
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await shiki.getHighlighter({ theme: 'github-dark-dimmed' })
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
					return `{@html \`${html}\` }`
				}
			},
		}),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
	},
	extensions: [
		'.svelte',
		'.md',
	]
};

export default config;
