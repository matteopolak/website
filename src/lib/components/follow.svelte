<script lang="ts">
	let { children } = $props();

	let follow: HTMLElement = $state()!;
	let moveTimeout: ReturnType<typeof setTimeout> | null = null;
	let lastPosition = { x: 0, y: 0 };

	let active = $state(true);

	function onMouseMove(event: MouseEvent) {
		lastPosition.x = event.clientX;
		lastPosition.y = event.clientY;

		follow.style.left = `${event.clientX}px`;
		follow.style.top = `${event.clientY}px`;

		if (moveTimeout) clearTimeout(moveTimeout);

		active = true;

		moveTimeout = setTimeout(() => {
			active = false;
		}, 500);
	}

	function onScroll() {
		if (moveTimeout) clearTimeout(moveTimeout);
		active = true;
	}

	$effect(() => {
		if (active) {
			follow.classList.add('active');
			follow.classList.remove('idle');
		} else {
			follow.classList.remove('active');
			follow.classList.add('idle');
		}
	});
</script>

<svelte:window onmousemove={onMouseMove} onscroll={onScroll} />

<div bind:this={follow} class="follow">
	<div
		class="flex items-center justify-center h-full pointer-events-none select-none overflow-visible flex-nowrap text-nowrap"
	>
		{@render children()}
	</div>
</div>

<style>
	.follow {
		position: fixed;
		top: 0;
		left: 0;

		transition:
			top 0.1s,
			left 0.1s,
			width 0.4s ease,
			height 0.4s ease,
			margin-left 0.4s ease,
			margin-top 0.4s ease;
		border-radius: 50%;
		background-color: white;
		color: black;

		z-index: 1000;
	}

	.follow:global(.idle) {
		width: 100px;
		height: 100px;

		margin-left: -50px;
		margin-top: -50px;
	}

	.follow:global(.active) {
		width: 10px;
		height: 10px;

		margin-left: -5px;
		margin-top: -5px;

		> div {
			opacity: 0;
		}
	}
</style>
