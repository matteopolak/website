<script>
	import Footer from '$/components/Footer.svelte';
	import Theme from '$/components/theme/Theme.svelte';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

	import '../app.css';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	});
</script>

<div class="fixed right-2 top-2 z-50">
	<Theme />
</div>

<slot />

<Footer />
