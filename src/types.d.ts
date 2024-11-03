declare module '@sveltejs/svelte-scroller' {
	import type { SvelteComponent } from 'svelte';

	interface ScrollerProps {
		top: number;
		bottom: number;
		index: number;
		offset: number;
		progress: number;
	}

	type ScrollerEvents = never;

	interface ScrollerSlots {
		background: Record<string, never>;
		foreground: Record<string, never>;
	}

	export default class Scroller extends SvelteComponent<
		ScrollerProps,
		ScrollerEvents,
		ScrollerSlots
	> {}
}
