<script>
	import { reveal } from 'svelte-reveal';
	import { animate } from '$/lib/animate';
	import { projects } from '$/lib/projects';

	import Quasi from '$/components/Quasi.svelte';
	import HorizontalScroll from '$/components/HorizontalScroll.svelte';
	import IntroAnimation from '$/components/IntroAnimation.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<IntroAnimation id="intro-animation" />

<HorizontalScroll id="projects">
	{#each projects as project}
		<section
			class="bg-base-200 flex flex-col lg:flex-row justify-center place-items-center gap-8 md:gap-12 lg:gap-24 w-screen h-screen p-8 max-h-screen"
		>
			<a
				href={project.website ?? project.repository}
				class="hover:scale-105 transition-all duration-300 flex flex-col lg:flex-row justify-end h-full lg:py-16 w-full lg:w-auto"
				use:reveal={animate(300)}
			>
				<img
					class="object-cover rounded-3xl overflow-hidden w-full lg:max-w-md max-h-32 lg:max-h-full lg:min-h-full shadow-static"
					alt={project.title}
					src={project.thumbnail}
				/>
			</a>

			<div
				class="flex flex-col place-items-start text-left gap-4 h-full lg:py-16"
			>
				<span
					use:reveal={animate(500)}
					class="text-3xl md:text-4xl lg:text-5xl max-w-xl font-bold block lg:mt-auto"
				>
					{project.title}
				</span>

				<div class="flex flex-wrap max-w-md gap-2">
					{#each project.tags as tag, i}
						<span
							class="badge badge-sm md:badge-md lg:badge-lg badge-neutral"
							use:reveal={animate(800 + 40 * i)}>{tag}</span
						>
					{/each}
				</div>

				<span
					class="text-md lg:text-lg max-w-xl lg:my-auto line-clamp-4 md:line-clamp-5"
					use:reveal={animate(500)}
				>
					{project.description}
				</span>

				{#if project.title === 'Quasi'}
					<span use:reveal={animate(500)} class="w-full">
						<Quasi />
					</span>
				{/if}
			</div>
		</section>
	{/each}
</HorizontalScroll>

<style>
	.shadow-static {
		box-shadow: 3 3 3 5px var(--base-300);
	}

	section {
		@apply h-screen flex;
	}
</style>
