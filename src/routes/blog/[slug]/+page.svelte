<script lang="ts">
	import Tag from '$lib/components/tag.svelte';
	import { formatDate } from '$lib/util';
	import Arrow from '~icons/mdi/arrow-back';

	let { data } = $props();

	let article: HTMLDivElement | undefined = $state();
	let readingTime = $state(0);

	$effect(() => {
		if (article) readingTime = Math.ceil(article.innerText.split(' ').length / 125);
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<a href="/blog" class="btn btn-ghost btn-lg m-2 w-fit">
	<Arrow /> Back to blog
</a>

<div class="flex w-full place-content-center px-8 py-16 md:py-32 lg:py-48">
	<article class="grid w-full max-w-2xl gap-8">
		<hgroup class="grid gap-4">
			<h1 class="text-4xl font-bold md:text-5xl">{data.meta.title}</h1>

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

		<figure class="h-56 w-full overflow-hidden rounded-2xl md:h-64">
			<img
				src="/images/blog/{data.slug}.webp"
				alt={data.meta.title}
				class="h-full w-full object-cover"
			/>
		</figure>

		<div class="prose max-w-full overflow-x-hidden" bind:this={article}>
			<data.content />
		</div>

		<script
			src="https://utteranc.es/client.js"
			repo="matteopolak/website"
			issue-term="pathname"
			label="comment"
			theme="github-dark"
			crossorigin="anonymous"
			async
		>
		</script>
	</article>
</div>

<style>
	article :global(code) {
		counter-reset: step;
		counter-increment: step 0;
	}

	article :global(code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 0.5rem;
		margin-right: 1rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
	}
</style>
