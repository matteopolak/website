<script lang="ts">
	import PostCard from './(components)/post-card.svelte';

	let { data } = $props();
</script>

<section class="grid w-full place-content-center gap-32 pb-64 pt-32">
	<h1 class="text-center text-4xl font-bold">Check out some of my blog posts</h1>

	<ul class="grid place-content-center gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</ul>
</section>
