import type { RevealOptions } from 'svelte-reveal';

export function animate(delay: number, direction: 'x' | 'y' = 'x'): RevealOptions {
	return {
		transition: 'fly',
		delay,
		duration: 300,
		[direction]: 30,
	};
}
