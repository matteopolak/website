<script lang="ts">
	import Rust from '~icons/devicon-plain/rust';
	import TypeScript from '~icons/devicon-plain/typescript';
	import Svelte from '~icons/devicon-plain/svelte';
	import PostgreSQL from '~icons/devicon-plain/postgresql';
	import Redis from '~icons/devicon-plain/redis';
	import Nodejs from '~icons/devicon-plain/nodejs';
	import Python from '~icons/devicon-plain/python';
	import Drizzle from '~icons/simple-icons/drizzle';
	import Trpc from '~icons/devicon-plain/trpc';
	import Prisma from '~icons/simple-icons/prisma';

	interface Props {
		tag: string;
	}

	let { tag }: Props = $props();
</script>

<span class="badge badge-neutral badge-md gap-1 md:badge-lg">
	{#if tag === 'Rust'}
		<Rust />
	{:else if tag === 'TypeScript'}
		<TypeScript />
	{:else if tag === 'Svelte'}
		<Svelte />
	{:else if tag === 'PostgreSQL'}
		<PostgreSQL />
	{:else if tag === 'Redis'}
		<Redis />
	{:else if tag === 'Node.js'}
		<Nodejs />
	{:else if tag === 'Python'}
		<Python />
	{:else if tag === 'Drizzle'}
		<Drizzle />
	{:else if tag === 'tRPC'}
		<Trpc />
	{:else if tag === 'Prisma'}
		<Prisma />
	{/if}

	#{tag.replaceAll(' ', '-').toLowerCase()}
</span>
