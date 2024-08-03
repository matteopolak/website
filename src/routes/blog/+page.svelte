<script lang="ts">
	import PostCard from "./(components)/PostCard.svelte";

	export let data;
</script>

<section class="grid w-full place-content-center pt-32 pb-64 gap-32">
	<h1 class="text-center font-bold text-4xl">
		Check out some of my blog posts
	</h1>

	<ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 place-content-center">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</ul>
</section>
