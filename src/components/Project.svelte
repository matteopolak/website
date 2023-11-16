<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import Arrow from 'virtual:icons/mdi/arrow-forward';
	import Monitor from 'virtual:icons/mdi/monitor';
	import GitHub from 'virtual:icons/logos/github-icon';

	import { animate } from '$/lib/animate';
	import type { projects } from '$/lib/projects';

	import Quasi from '$/components/Quasi.svelte';

	export let project: (typeof projects)[number];
</script>

<section
	class="bg-base-200 flex flex-col lg:flex-row justify-center place-items-center gap-8 md:gap-12 lg:gap-24 w-screen h-screen p-4 md:p-8 max-h-screen"
>
	<a
		href={project.website ?? project.repository}
		class="hover:scale-105 transition-all duration-300 flex flex-col lg:flex-row justify-end h-full lg:py-16 w-full lg:w-auto max-w-xl lg:max-w-none"
		use:reveal={animate(100)}
	>
		<img
			class="object-cover rounded-3xl overflow-hidden w-full lg:max-w-md max-h-32 lg:max-h-full lg:min-h-full shadow-static"
			alt={project.title}
			src={project.thumbnail}
		/>
	</a>

	<div class="flex flex-col place-items-start text-left gap-4 h-full lg:py-16">
		<span
			use:reveal={animate(200)}
			class="text-3xl md:text-4xl lg:text-5xl max-w-xl font-bold block lg:mt-auto"
		>
			{project.title}
		</span>

		<div class="flex flex-wrap max-w-md gap-2">
			{#each project.tags as tag, i}
				<span
					class="badge badge-sm md:badge-md lg:badge-lg badge-neutral"
					use:reveal={animate(300 + 40 * i)}>{tag}</span
				>
			{/each}
		</div>

		<span
			class="text-md lg:text-lg max-w-xl lg:my-auto line-clamp-4 md:line-clamp-5"
			use:reveal={animate(150)}
		>
			{project.description}
		</span>

		{#if project.title === 'Quasi'}
			<span use:reveal={animate(200)} class="w-full">
				<Quasi />
			</span>
		{/if}

		<div class="flex flex-wrap gap-4 place-self-end">
			{#if project.website}
				<a
					class="btn btn-sm md:btn-md lg:btn-lg btn-secondary"
					href={project.website}
					use:reveal={animate(300)}
				>
					<Monitor />
					View website
				</a>
			{/if}

			<a
				class="btn btn-sm md:btn-md lg:btn-lg btn-primary"
				href={project.repository}
				use:reveal={animate(200)}
			>
				<GitHub />
				Learn more
				<Arrow />
			</a>
		</div>
	</div>
</section>
