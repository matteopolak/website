<script>
	import Footer from '$/components/Footer.svelte';
	import Theme from '$/components/theme/Theme.svelte';

	import '../app.css';
</script>

<div class="fixed right-2 top-2 z-50">
	<Theme />
</div>

<slot />

<Footer />
