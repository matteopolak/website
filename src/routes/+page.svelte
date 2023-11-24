<script>
	import { projects } from '$/lib/projects';

	import HorizontalScroll from '$/components/HorizontalScroll.svelte';
	import IntroAnimation from '$/components/IntroAnimation.svelte';
	import Project from '$/components/Project.svelte';
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
