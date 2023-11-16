<script>
	import { projects } from '$/lib/projects';

	import HorizontalScroll from '$/components/HorizontalScroll.svelte';
	import IntroAnimation from '$/components/IntroAnimation.svelte';
	import Project from '$/components/Project.svelte';
</script>

<IntroAnimation />

<HorizontalScroll id="projects">
	{#each projects as project}
		<Project {project} />
	{/each}
</HorizontalScroll>
