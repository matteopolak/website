<script lang="ts" module>
	import type { TagName } from '$lib/types';

	import Svelte from './icons/svelte.svelte';
	import Tailwind from './icons/tailwind.svelte';

	const icons = {
		Tailwind: Tailwind,
		Svelte: Svelte
	} satisfies Record<TagName, unknown>;
</script>

<script lang="ts">
	let { name }: { name: TagName } = $props();

	let Icon = $derived(icons[name]);
</script>

<div class="tooltip" data-tip={name}>
	<button class="btn btn-square btn-sm">
		<Icon class="w-6 h-6" />
	</button>
</div>
