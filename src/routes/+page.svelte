<script lang="ts">
	import Scroller from '@sveltejs/svelte-scroller';

	import { projects } from '$lib/projects';

	import IntroAnimation from '$lib/components/intro-animation.svelte';
	import Project from '$lib/components/project.svelte';

	let index: number = $state(0);
	let offset: number = $state(0);
	let progress: number = $state(0);
</script>

<nav
	class="sticky top-1/2 right-0 z-20 float-right mr-4 hidden max-w-sm -translate-y-1/2 transform text-right md:block lg:mr-8"
>
	<div class="flex flex-col gap-2 text-xs">
		{#each projects as project, i}
			<a
				class="block"
				class:text-extreme={index === i}
				class:text-base-content={index !== i}
				class:font-bold={index === i}
				href="#{project.id}"
			>
				{project.title}
			</a>
		{/each}
	</div>
</nav>

<IntroAnimation />

<div class="h-16"></div>

<Scroller top={0.2} bottom={0.8} bind:index bind:offset bind:progress>
	<div slot="foreground" id="projects" class="flex flex-col gap-32 lg:w-[calc(100vw-12rem-1rem)]">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</Scroller>
