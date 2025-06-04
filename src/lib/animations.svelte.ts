import { SplitText } from 'gsap/SplitText';
import { gsap } from 'gsap';

export function shutter(
	node: HTMLElement,
	options?: {
		delay?: number;
		from?: 'top' | 'bottom';
	}
) {
	const { delay = 0, from = 'bottom' } = options ?? {};

	const split = SplitText.create(node, {
		type: 'lines',
		mask: 'lines'
	});

	gsap.set(split.lines, { y: from === 'bottom' ? '100%' : '-100%' });

	gsap.to(split.lines, {
		y: '0%',
		duration: 1,
		stagger: 0.1,
		ease: 'power4.out',
		delay
	});

	$effect(() => {
		return () => split.revert();
	});
}
