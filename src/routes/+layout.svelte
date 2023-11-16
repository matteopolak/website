<script>
	import Footer from '$/components/Footer.svelte';
	import Theme from '$/components/theme/Theme.svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import '../app.css';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<div class="absolute right-2 top-2 z-50">
	<Theme />
</div>

<slot />

<Footer />
