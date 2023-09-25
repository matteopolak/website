<script>
	import Footer from '$/components/Footer.svelte';
	import Navbar from '$/components/Navbar.svelte';
	import Theme from '$/components/theme/Theme.svelte';
	import { page } from '$app/stores';

	import '../app.css';
</script>

{#if $page.url.pathname !== '/'}
	<Navbar />
{:else}
	<div class="absolute right-2 top-2">
		<Theme />
	</div>
{/if}

<slot />

<Footer />
