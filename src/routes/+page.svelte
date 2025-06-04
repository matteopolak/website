<script lang="ts">
	import Cards from '$lib/components/cards/Cards.svelte';
	import gsap from 'gsap';

	import projects from '$lib/projects';

	import { onMount } from 'svelte';

	import { shutter } from '$lib/animations.svelte';
	import Follow from '$lib/components/follow.svelte';

	onMount(() => {
		const revealer = gsap.timeline();

		revealer
			.to('.r-1', {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
				duration: 1.5,
				ease: 'power4.inOut'
			})
			.to(
				'.r-2',
				{
					clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
					duration: 1.5,
					ease: 'power4.inOut'
				},
				'<'
			);
	});
</script>

<Follow>scroll</Follow>

<div class="revealers">
	<div class="revealer r-1"></div>
	<div class="revealer r-2"></div>
</div>

<section class="intro">
	<div class="leading-15">
		<h1 use:shutter={{ delay: 1 }}>Matthew Polak</h1>
		<h2 use:shutter={{ delay: 1.2, from: 'top' }}>Software Engineer</h2>
	</div>
</section>

<Cards {projects} />

<section class="outro">
	<h1>Architecture reimagined for the virtual age</h1>
</section>

<style>
	.revealers {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		z-index: 2;
		opacity: 1;
		pointer-events: none;
	}

	.revealer {
		flex: 1;
		width: 100%;
		background-color: white;
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	h1 {
		font-size: 5rem;
		font-weight: 600;
		letter-spacing: -0.1rem;
		line-height: 1.25;
	}

	h2 {
		font-size: 3rem;
		font-weight: 400;
	}

	.intro,
	.outro {
		height: 100svh;
		padding: 1.5em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 2rem;
			letter-spacing: 0;
		}

		.intro h1,
		.outro h1 {
			width: 100%;
		}
	}
</style>
