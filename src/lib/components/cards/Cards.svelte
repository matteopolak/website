<script lang="ts">
	import gsap from 'gsap';

	import { setupMarqueeAnimation } from '$lib/marquee';

	import SplitText from 'gsap/SplitText';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	import Card from './Card.svelte';
	import type { Project } from '$lib/types';

	let { projects }: { projects: Project[] } = $props();

	onMount(() => {
		const cards = gsap.utils.toArray('.item');
		const introCard = cards[0];

		const titles = gsap.utils.toArray('.item-title h1');

		for (const title of titles) {
			const split = new SplitText(title, {
				type: 'char',
				charsClass: 'char',
				tag: 'div'
			});

			for (const char of split.chars) {
				char.innerHTML = `<span>${char.textContent}</span>`;
			}
		}

		const cardImgWrapper = introCard.querySelector('.item-img');
		const cardImg = introCard.querySelector('.item-img > picture');

		gsap.set(cardImgWrapper, {
			scale: 0.5,
			borderRadius: '400px'
		});
		gsap.set(cardImg, {
			scale: 1.5
		});

		function animateContentIn(titleChars, description) {
			gsap.to(titleChars, { x: '0%', duration: 0.75, ease: 'power4.out' });
			gsap.to(description, {
				x: 0,
				opacity: 1,
				duration: 0.75,
				delay: 0.1,
				ease: 'power4.out'
			});
		}

		function animateContentOut(titleChars, description) {
			gsap.to(titleChars, { x: '100%', duration: 0.5, ease: 'power4.out' });
			gsap.to(description, {
				x: '40px',
				opacity: 0,
				duration: 0.5,
				ease: 'power4.out'
			});
		}

		const marquee = introCard.querySelector('.item-marquee .marquee');
		const titleChars = introCard.querySelector('.char span');
		const description = introCard.querySelector('.item-description');

		ScrollTrigger.create({
			trigger: introCard,
			start: 'top top',
			end: '+=300vh',
			onUpdate(self) {
				const progress = self.progress;
				const imgScale = 0.5 + progress * 0.5;
				const borderRadius = 400 - progress * 375;
				const innerImgScale = 1.5 - progress * 0.5;

				gsap.set(cardImgWrapper, {
					scale: imgScale,
					borderRadius: `${borderRadius}px`
				});
				gsap.set(cardImg, {
					scale: innerImgScale
				});

				if (imgScale >= 0.5 && imgScale <= 0.75) {
					const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
					gsap.set(marquee, {
						opacity: 1 - fadeProgress
					});
				} else if (imgScale < 0.5) {
					gsap.set(marquee, { opacity: 1 });
				} else if (imgScale > 0.75) {
					gsap.set(marquee, { opacity: 0 });
				}

				if (progress >= 1 && !introCard.contentRevealed) {
					introCard.contentRevealed = true;
					animateContentIn(titleChars, description);
				}
				if (progress < 1 && introCard.contentRevealed) {
					introCard.contentRevealed = false;
					animateContentOut(titleChars, description);
				}
			}
		});

		for (const [index, card] of cards.entries()) {
			const isLastCard = index === cards.length - 1;

			ScrollTrigger.create({
				trigger: card,
				start: 'top top',
				end: isLastCard ? '+=100vh' : 'top top',
				endTrigger: isLastCard ? null : cards[cards.length - 1],
				pin: true,
				pinSpacing: isLastCard
			});
		}

		for (const [index, card] of cards.entries()) {
			if (index >= cards.length - 1) continue;

			const cardWrapper = card.querySelector('.item-wrapper');
			ScrollTrigger.create({
				trigger: cards[index + 1],
				start: 'top bottom',
				end: 'top top',
				onUpdate(self) {
					const progress = self.progress;
					gsap.set(cardWrapper, {
						scale: 1 - progress * 0.25,
						opacity: 1 - progress
					});
				}
			});
		}

		for (const [index, card] of cards.entries()) {
			if (index === 0) continue;

			const cardImg = card.querySelector('.item-img > picture');
			const imgContainer = card.querySelector('.item-img');

			ScrollTrigger.create({
				trigger: card,
				start: 'top bottom',
				end: 'top top',
				onUpdate(self) {
					const progress = self.progress;
					gsap.set(cardImg, {
						scale: 2 - progress
					});
					gsap.set(imgContainer, {
						borderRadius: 150 - progress * 125 + 'px'
					});
				}
			});
		}

		for (const [index, card] of cards.entries()) {
			if (index === 0) continue;

			const cardDescription = card.querySelector('.item-description');
			const titleChars = card.querySelectorAll('.char span');

			ScrollTrigger.create({
				trigger: card,
				start: 'top top',
				onEnter: () => animateContentIn(titleChars, cardDescription),
				onLeaveBack: () => animateContentOut(titleChars, cardDescription)
			});
		}

		setupMarqueeAnimation();
	});
</script>

<section class="items">
	{#each projects as project, index (project.title)}
		<Card marquee={index === 0 ? projects.map((p) => p.title) : undefined} {project} />
	{/each}
</section>

<style>
	section {
		position: relative;
		width: 100vw;
	}

	.items {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 25svh;
	}
</style>
