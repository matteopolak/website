<script lang="ts">
	import { onMount } from 'svelte';

	import Tag from '$lib/components/Tag.svelte';
	import { formatDate } from '$lib/util';

	export let data;

	let article: HTMLDivElement;
	let readingTime = 0;

	onMount(() => {
		readingTime = Math.ceil(article.innerText.split(' ').length / 125);
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex place-content-center py-16 md:py-32 lg:py-48 w-full px-8">
	<article class="max-w-2xl w-full grid gap-8">
		<hgroup class="grid gap-4">
			<h1 class="font-bold text-4xl md:text-5xl">{data.meta.title}</h1>

			<p>
				{readingTime} min read
				<span class="text-neutral-500">&#x2022</span>
				{formatDate(data.meta.date)}
			</p>
		</hgroup>

		<div class="flex flex-wrap gap-2">
			{#each data.meta.tags as tag}
				<Tag {tag} />
			{/each}
		</div>

		<figure class="w-full h-56 md:h-64 rounded-2xl overflow-hidden">
			<img
				src="/images/blog/{data.slug}.webp"
				alt={data.meta.title}
				class="object-cover w-full h-full"
			/>
		</figure>

		<div class="prose max-w-full overflow-x-hidden" bind:this={article}>
			<svelte:component this={data.content} />
		</div>
	</article>
</div>
