<script lang="ts">
	import Tag from './Tag.svelte';

	export type Project = {
		image: string;
		title: string;
		description: string;
		tags: string[];
		github?: string;
		website?: string;
	};

	let { project }: { project: Project } = $props();
</script>

<section class="card bg-base-10 card-border border-base-300 card-sm">
	<main class="card-body gap-4 min-h-64">
		<h2 class="card-title">{project.title}</h2>

		<div class="flex flex-wrap gap-1">
			{#each project.tags as tag (tag)}
				<Tag name={tag} />
			{/each}
		</div>

		<a class="btn" href="/asd">github</a>
	</main>
</section>