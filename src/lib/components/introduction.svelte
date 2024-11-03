<script lang="ts">
	import GitHub from '~icons/bxl/github';
	import LinkedIn from '~icons/bxl/linkedin-square';
	import Blog from '~icons/mdi/file-document-edit-outline';
</script>

<section
	class="flex h-screen max-w-6xl flex-col justify-center gap-5 p-8 text-xl md:gap-8 md:p-12 md:text-3xl lg:gap-10 lg:p-16 lg:text-4xl xl:text-5xl"
>
	<div class="absolute left-0 right-0 top-0 -z-10 grid h-full place-items-center">
		<div class="blob bottom-48 h-48 w-48 bg-primary"></div>
		<div class="blob animation-delay-2000 left-16 top-8 h-48 w-48 bg-secondary"></div>
		<div class="blob animation-delay-4000 top-32 h-32 w-32 bg-accent"></div>
		<div class="blob animation-delay-4000 right-72 h-64 w-64 bg-success"></div>
	</div>

	<h1 class="text-4xl font-bold md:text-6xl lg:text-7xl">Hi, I'm Matthew Polak</h1>

	<p>
		I'm a third-year <span class="font-semibold text-info"> Computer Science student </span> at the University
		of Ottawa.
	</p>

	<div class="flex flex-row flex-wrap gap-2 lg:gap-4">
		<a href="https://github.com/matteopolak" class="btn-github btn btn-sm md:btn-md lg:btn-lg">
			<GitHub /> GitHub
		</a>
		<a
			href="https://linkedin.com/in/matteo-polak"
			class="btn-linkedin btn btn-sm md:btn-md lg:btn-lg"
		>
			<LinkedIn /> LinkedIn
		</a>
		<a href="/blog" class="btn btn-accent btn-sm md:btn-md lg:btn-lg">
			<Blog /> Blog
		</a>
	</div>
</section>

<style lang="postcss">
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.blob {
		@apply absolute animate-blob rounded-full opacity-40 mix-blend-multiply blur-3xl filter;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
