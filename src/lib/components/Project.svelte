<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import GitHub from './icons/github.svelte';
	import Tag from './Tag.svelte';
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<section class="card card-sm">
	<main class="card-body gap-4 min-h-64">
		<h2 class="card-title">{project.title}</h2>

		<div class="flex flex-wrap gap-1">
			{#each project.tags as tag (tag)}
				<Tag name={tag} />
			{/each}
		</div>

		<a class="btn" href="/asd">
			<GitHub class="w-4 h-4" />
			See it on GitHub
			<ArrowRight class="w-4 h-4 ml-2" />
		</a>
	</main>
</section>
