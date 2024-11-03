<script lang="ts">
	import Tag from '$lib/components/tag.svelte';
	import type { Post } from '$lib/types';
	import { reveal } from 'svelte-reveal';

	interface Props {
		post?: Post | undefined;
	}

	let { post = undefined }: Props = $props();
</script>

{#if post}
	<a
		class="card h-[32rem] w-96 bg-base-300 shadow-xl transition-all duration-300 hover:scale-105"
		href="/blog/{post.slug}"
		use:reveal={{
			delay: 100,
			duration: 300,
			y: 5,
			easing: 'easeInOutSine'
		}}
	>
		<figure>
			<img
				src="/images/blog/{post.slug}.webp"
				alt={post.title}
				class="h-full w-full object-cover"
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
	<div class="card skeleton h-[32rem] w-96 shadow-xl"></div>
{/if}
