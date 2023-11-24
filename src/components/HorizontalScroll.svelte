<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	export let id: string;
	let container: HTMLDivElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		container.style.width = `${container.children.length * 100}%`;

		const trigger = gsap.to(container.children, {
			xPercent: -100 * (container.children.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: container,
				pin: true,
				scrub: 0.6,
				snap: 1 / (container.children.length - 1),
				end: () => `+=${container.offsetWidth}`,
			},
		});

		return () => {
			trigger.kill();
		};
	});
</script>

<div class="w-full overflow-x-hidden">
	<div bind:this={container} class="flex flex-nowrap" {id}>
		<slot />
	</div>
</div>
