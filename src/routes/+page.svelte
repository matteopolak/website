<script lang="ts">
	import { projects } from '$lib/projects';

	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import IntroAnimation from '$lib/components/IntroAnimation.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<IntroAnimation />

		<HorizontalScroll id="projects">
			{#each projects as project}
				<Project {project} />
			{/each}
		</HorizontalScroll>
	</div>
</div>
