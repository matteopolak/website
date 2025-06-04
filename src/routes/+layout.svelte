<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import MotionPathPlugin from 'gsap/MotionPathPlugin';
	import SplitText from 'gsap/SplitText';

	gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin);

	onMount(() => {
		// Initialize a new Lenis instance for smooth scrolling
		const lenis = new Lenis();

		// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
		lenis.on('scroll', ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
	});

	let { children } = $props();
</script>

{@render children()}
