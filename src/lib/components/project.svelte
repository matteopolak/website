<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import Arrow from '~icons/mdi/arrow-forward';
	import Monitor from '~icons/mdi/monitor';
	import GitHub from '~icons/bxl/github';

	import { animate } from '$lib/animate';
	import type { projects } from '$lib/projects';

	import Quasi from '$lib/components/quasi.svelte';
	import Tag from '$lib/components/tag.svelte';

	interface Props {
		project: (typeof projects)[number];
	}

	let { project }: Props = $props();
</script>

<section
	class="flex flex-col place-items-stretch justify-center gap-8 p-4 pt-32 md:gap-12 md:p-8 lg:flex-row lg:gap-24"
	id={project.id}
>
	<a
		href={project.website ?? project.repository}
		class="flex max-h-96 w-full max-w-xl flex-col justify-end transition-all duration-300 hover:scale-105 lg:h-full lg:max-h-none lg:w-auto lg:max-w-none lg:flex-row"
		use:reveal={animate(100)}
	>
		<img
			class="shadow-static h-full w-full overflow-hidden rounded-3xl object-cover object-left-top lg:max-w-md"
			alt={project.title}
			src={project.thumbnail}
		/>
	</a>

	<div class="flex h-full max-w-xl flex-col place-items-stretch gap-4 text-left lg:py-32">
		<span
			use:reveal={animate(200)}
			class="block max-w-xl text-3xl font-bold md:text-4xl lg:mt-auto lg:text-5xl"
		>
			{project.title}
		</span>

		<div class="flex max-w-md flex-wrap place-items-center items-center gap-2">
			{#each project.tags as tag, i}
				<div use:reveal={animate(300 + 40 * i)} class="flex place-items-center">
					<Tag {tag} />
				</div>
			{/each}
		</div>

		<span
			class="text-md line-clamp-4 max-w-xl md:line-clamp-5 lg:my-auto lg:text-lg"
			use:reveal={animate(150)}
		>
			{project.description}
		</span>

		{#if project.id === 'quasi'}
			<span use:reveal={animate(200)} class="max-h-44 w-full">
				<Quasi />
			</span>
		{/if}

		<div class="flex flex-wrap gap-4 place-self-end">
			{#if project.website}
				<a
					class="btn btn-secondary btn-sm md:btn-md lg:btn-lg"
					href={project.website}
					use:reveal={animate(300)}
				>
					<Monitor />
					View website
				</a>
			{/if}

			<a
				class="btn btn-primary btn-sm md:btn-md lg:btn-lg"
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
