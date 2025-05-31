<script lang="ts">
	import Project, { type Project as ProjectType } from '$lib/components/Project.svelte';

	const fakeProject: ProjectType = {
		image: 'https://placehold.co/200x200',
		title: 'Fake Project',
		description: 'This is a sample project to demonstrate the Project component. It features an image, description, tags, and action buttons.',
		tags: ['Svelte', 'Tailwind', 'DaisyUI'],
		github: 'https://github.com/example/fake-project',
		website: 'https://example.com/fake-project'
	};

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div class="sticky top-0 z-10">
	{scrollY}
</div>

<Project project={fakeProject} />
