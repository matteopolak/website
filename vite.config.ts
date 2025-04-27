import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		Icons({
			compiler: 'svelte'
		})
	]
});
