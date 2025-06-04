<script lang="ts">
	import type { Project } from '$lib/types';

	const thumbnails: Record<string, { default: string }> = import.meta.glob(
		'$lib/images/projects/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: 'true'
			}
		}
	);

	function url(path: string): string {
		console.log(path, thumbnails[`/src/lib/images/projects/${path}`]);
		return thumbnails[`/src/lib/images/projects/${path}`].default;
	}

	let { marquee, project }: { marquee?: string[] | undefined; project: Project } = $props();
</script>

{#snippet image(src: string)}
	{#if typeof src === 'string'}
		<img {src} alt={project.title} class="object-top-left" />
	{:else}
		<enhanced:img {src} alt={project.title} sizes="min(1280px, 100vw)" />
	{/if}
{/snippet}

<div class="item">
	{#if marquee}
		<div class="item-marquee">
			<div class="marquee">
				{#each marquee as item (item)}
					<h1>{item}</h1>
				{/each}
			</div>
		</div>
	{/if}

	<div class="item-wrapper">
		<div class="item-content">
			<div class="item-title">
				<h1>{project.title}</h1>
			</div>
			<div class="item-description">
				<p>{project.description}</p>
			</div>
		</div>

		<div class="item-img">
			{@render image(url(project.thumbnail))}
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 5rem;
		font-weight: 500;
		letter-spacing: -0.1rem;
		line-height: 1.25;
	}

	.item-marquee {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		overflow: hidden;
	}

	.marquee {
		display: flex;
	}

	.marquee h1 {
		white-space: nowrap;
		font-size: 10vw;
		font-weight: 600;
		margin-right: 30px;
	}

	.item {
		position: relative;
		width: 100vw;
		height: 100svh;
		padding: 1.5em;
	}

	.item-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		will-change: transform;
	}

	.item-img {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 150px;
		overflow: hidden;
	}

	.item-img > * {
		transform: scale(2);
		will-change: transform;
	}

	.item-content {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		z-index: 1;
	}

	.item-content .item-title {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.item-content .item-description {
		text-align: center;
		width: 40%;
		margin-bottom: 3em;
		position: relative;
		transform: translateX(40px);
		opacity: 0;
	}

	.item:nth-child(2) {
		margin-top: 50vh;
	}

	.item :global(.char) {
		position: relative;
		overflow: hidden;
		will-change: transform;
	}

	.item :global(.char) :global(span) {
		transform: translateX(100%);
		display: inline-block;
		will-change: transform;
	}

	p {
		font-size: 1.125rem;
		font-weight: 400;
		line-height: 1.25;
	}

	@media (max-width: 900px) {
		h1 {
			font-size: 2rem;
			letter-spacing: 0;
		}

		.item-content .item-description {
			width: 90%;
		}
	}
</style>
