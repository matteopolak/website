<script lang="ts">
	import Rust from '~icons/devicon-plain/rust';
	import TypeScript from '~icons/devicon-plain/typescript';
	import Svelte from '~icons/devicon-plain/svelte';
	import PostgreSQL from '~icons/devicon-plain/postgresql';
	import Redis from '~icons/devicon-plain/redis';
	import Nodejs from '~icons/devicon-plain/nodejs';
	import Python from '~icons/devicon-plain/python';

	export let tag: string;
</script>

<span class="badge badge-sm md:badge-md lg:badge-lg badge-neutral gap-1">
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
	{/if}

	#{tag.replaceAll(' ', '-').toLowerCase()}
</span>
