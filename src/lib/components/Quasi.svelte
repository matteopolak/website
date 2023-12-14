<script lang="ts">
	import init, { execute } from '$lib/quasi/wasm';

	const DEFAULT_INPUT = 'print "Hello, world!";';
	const DEFAULT_OUTPUT = 'Hello, world!';

	let code = DEFAULT_INPUT;
	let output = DEFAULT_OUTPUT;
	let error = '';

	$: if (code !== DEFAULT_INPUT) {
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

	function executeCode(code: string) {
		const encoder = new TextEncoder();
		const bytes = encoder.encode(code);

		return execute(bytes);
	}
</script>

{#await init()}
	<div class="max-w-xl w-full skeleton h-44" />
{:then}
	<div class="card bg-base-300 max-w-xl w-full overflow-hidden h-44">
		<div class="card-body p-0 gap-0">
			<h1 class="text-sm bg-base-100 p-3">
				Quasi interpreter (executed with Wasm)
			</h1>
			<textarea
				bind:value={code}
				class="textarea p-4 resize-none font-mono rounded-none bg-base-100 leading-5 max-h-96 overflow-hidden h-fit"
			/>

			<div class="p-4 font-mono whitespace-pre-wrap leading-5 overflow-hidden">
				{#if error}
					<span class="text-error">{error}</span>
				{:else}
					{output}
				{/if}
			</div>
		</div>
	</div>
{/await}
