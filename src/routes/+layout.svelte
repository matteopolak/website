<script>
	import Footer from '$lib/components/footer.svelte';
	import Theme from '$lib/components/theme.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<div class="fixed right-2 top-2 z-50">
	<Theme />
</div>

{@render children?.()}

<Footer />
