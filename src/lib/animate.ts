import type { RevealOptions } from 'svelte-reveal';

export function animate(delay: number, direction: 'x' | 'y' = 'x'): RevealOptions {
	return {
		delay,
		duration: 300,
		[direction]: 30
	};
}
