<script lang="ts">
	import Scroller from "@sveltejs/svelte-scroller";

	import { projects } from "$lib/projects";

	import IntroAnimation from "$lib/components/IntroAnimation.svelte";
	import Project from "$lib/components/Project.svelte";

	let index: number;
	let offset: number;
	let progress: number;
</script>

<nav
	class="hidden md:block sticky top-1/2 transform -translate-y-1/2 right-0 float-right mr-4 lg:mr-8 max-w-sm text-right z-20"
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

<Scroller top={0.2} bottom={0.8} bind:index bind:offset bind:progress>
	<div slot="foreground" id="projects" class="lg:w-[calc(100vw-12rem-1rem)]">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</Scroller>
