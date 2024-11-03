import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({ postcss: true }),
		vitePreprocess(),
		mdsvex({
			extension: '.md',
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const raw = await codeToHtml(code, { lang, theme: 'github-dark-dimmed' });
					const html = escapeSvelte(raw);

					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md']
};

export default config;
