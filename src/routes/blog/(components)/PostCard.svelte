<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import type { Post } from '$lib/types';
	import { reveal } from 'svelte-reveal';

	export let post: Post | undefined = undefined;
</script>

{#if post}
	<a
		class="card w-96 h-[32rem] shadow-xl hover:scale-105 bg-base-300 transition-all duration-300"
		href="/blog/{post.slug}"
		use:reveal={{
			delay: 100,
			duration: 300,
			y: 5,
			easing: 'easeInOutSine',
			transition: 'fly',
		}}
	>
		<figure>
			<img
				src="/images/blog/{post.slug}.webp"
				alt={post.title}
				class="object-cover w-full h-full"
			/>
		</figure>
		<div class="card-body h-full">
			<h2 class="card-title text-2xl">{post.title}</h2>
			<p>{post.description}</p>

			<div class="card-actions">
				{#each post.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		</div>
	</a>
{:else}
	<div class="card w-96 h-[32rem] shadow-xl skeleton" />
{/if}
