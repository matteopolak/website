<script lang="ts">
	import init, { execute } from '$lib/quasi/wasm';

	const DEFAULT_INPUT = 'print "Hello, world!";';
	const DEFAULT_OUTPUT = 'Hello, world!';

	let code = $state(DEFAULT_INPUT);
	let output = $state(DEFAULT_OUTPUT);
	let error = $state('');

	function executeCode(code: string) {
		const encoder = new TextEncoder();
		const bytes = encoder.encode(code);

		return execute(bytes);
	}

	$effect(() => {
		if (code !== DEFAULT_INPUT) {
			try {
				output = executeCode(code);
				error = '';
			} catch (e) {
				error = e as string;
			}
		} else {
			output = DEFAULT_OUTPUT;
			error = '';
		}
	});
</script>

{#await init()}
	<div class="skeleton h-full w-full"></div>
{:then}
	<div class="grid h-full w-full grid-cols-2 rounded-xl bg-base-300">
		<h1 class="col-span-full p-3 text-xs">Quasi interpreter (executed with Wasm)</h1>

		<textarea
			bind:value={code}
			class="textarea h-32 resize-none overflow-auto rounded-none rounded-bl-2xl bg-base-200 p-4 font-mono leading-5"
		></textarea>

		<div class="h-32 overflow-auto whitespace-pre-wrap p-4 font-mono text-xs leading-5">
			{#if error}
				<span class="overflow-auto text-error">{error}</span>
			{:else}
				{output}
			{/if}
		</div>
	</div>
{/await}
