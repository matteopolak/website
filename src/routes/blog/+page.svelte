<script lang="ts">
	import PostCard from './(components)/PostCard.svelte';

	export let data;
</script>

<section class="grid w-full place-content-center pt-32 pb-64 gap-32">
	<h1 class="text-center font-bold text-4xl">
		Check out some of my blog posts
	</h1>

	<ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 place-content-center">
		{#await data.posts}
			{#each { length: 6 } as _}
				<PostCard />
			{/each}
		{:then posts}
			{#each posts as post}
				<PostCard {post} />
			{/each}
		{/await}
	</ul>
</section>
