import type { RevealOptions } from 'svelte-reveal';

export function expandWidthOnScroll(node: HTMLElement) {
	const height = node.offsetHeight * 2;

	function update() {
		const { top } = node.getBoundingClientRect();

		const scale =
			0.5 + Math.min(0.5, Math.max(0, window.innerHeight - top) / height);

		node.style.transform = `scale(${scale})`;
	}

	window.addEventListener('scroll', update);
	window.addEventListener('resize', update);

	update();

	return {
		destroy() {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		},
	};
}

export function animate(delay: number, direction: 'x' | 'y' = 'x'): RevealOptions {
	return {
		transition: 'fly',
		delay,
		duration: 300,
		[direction]: 30,
	};
}