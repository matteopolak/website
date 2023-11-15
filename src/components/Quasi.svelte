<script lang="ts">
	import init, { execute } from '$/lib/quasi/wasm';
	import { onMount } from 'svelte';

	let ready = false;

	onMount(() => {
		init().then(() => {
			ready = true;
		});
	});

	let code = 'print "Hello" + ", world!";';
	let output = '';
	let error = '';

	$: if (ready) {
		try {
			output = executeCode(code);
			error = '';
		} catch (e) {
			error = e as string;
		}
	}

	function executeCode(code: string) {
		const encoder = new TextEncoder();
		const bytes = encoder.encode(code);

		return execute(bytes);
	}
</script>

{#if ready}
	<div class="card bg-base-300 max-w-xl w-full overflow-hidden">
		<div class="card-body p-0 gap-0">
			<h1 class="text-sm bg-base-100 p-3">
				Quasi interpreter (executed with Wasm)
			</h1>
			<textarea
				bind:value={code}
				class="textarea p-4 resize-none font-mono rounded-none bg-base-100 leading-5 max-h-96 overflow-scroll"
			/>

			<div
				class="p-4 font-mono whitespace-pre-wrap leading-5 max-h-48 overflow-scroll"
			>
				{#if error}
					<span class="text-error">{error}</span>
				{:else}
					{output}
				{/if}
			</div>
		</div>
	</div>
{:else}
	<div
		class="card bg-base-300 max-w-xl place-items-center justify-center h-32 w-full"
	>
		<span class="loading loading-infinity loading-md" />
	</div>
{/if}
