<script lang="ts">
	import init, { execute } from "$lib/quasi/wasm";

	const DEFAULT_INPUT = 'print "Hello, world!";';
	const DEFAULT_OUTPUT = "Hello, world!";

	let code = DEFAULT_INPUT;
	let output = DEFAULT_OUTPUT;
	let error = "";

	$: if (code !== DEFAULT_INPUT) {
		try {
			output = executeCode(code);
			error = "";
		} catch (e) {
			error = e as string;
		}
	} else {
		output = DEFAULT_OUTPUT;
		error = "";
	}

	function executeCode(code: string) {
		const encoder = new TextEncoder();
		const bytes = encoder.encode(code);

		return execute(bytes);
	}
</script>

{#await init()}
	<div class="w-full skeleton h-full" />
{:then}
	<div class="grid grid-cols-2 rounded-xl bg-base-300 h-full w-full">
		<h1 class="text-xs p-3 col-span-full">
			Quasi interpreter (executed with Wasm)
		</h1>

		<textarea
			bind:value={code}
			class="textarea p-4 resize-none font-mono rounded-none leading-5 bg-base-200 rounded-bl-2xl overflow-auto h-32"
		/>

		<div
			class="p-4 font-mono whitespace-pre-wrap leading-5 text-xs overflow-auto h-32"
		>
			{#if error}
				<span class="text-error overflow-auto">{error}</span>
			{:else}
				{output}
			{/if}
		</div>
	</div>
{/await}
