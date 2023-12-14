<script lang="ts">
	import GitHub from '~icons/bxl/github';
	import LinkedIn from '~icons/bxl/linkedin-square';
	import Blog from '~icons/mdi/file-document-edit-outline';
</script>

<section
	class="h-screen p-8 md:p-12 lg:p-16 flex flex-col gap-5 md:gap-8 lg:gap-10 justify-center text-xl md:text-3xl lg:text-4xl xl:text-5xl max-w-6xl"
>
	<div
		class="absolute top-0 left-0 right-0 h-full -z-10 grid place-items-center"
	>
		<div class="blob bg-primary w-48 h-48 bottom-48" />
		<div
			class="blob bg-secondary animation-delay-2000 w-48 h-48 left-16 top-8"
		/>
		<div class="blob bg-accent animation-delay-4000 w-32 h-32 top-32" />
		<div class="blob bg-success animation-delay-4000 w-64 h-64 right-72" />
	</div>

	<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
		Hi, I'm Matthew Polak
	</h1>

	<p>
		I'm a second-year <span class="font-semibold text-info">
			Computer Science student
		</span> at the University of Ottawa.
	</p>

	<p>
		My academic path is a blend of <span class="font-semibold text-accent"
			>artificial intelligence</span
		>, <span class="font-semibold text-primary">backend development</span>, and
		<span class="font-semibold text-success">frontend development</span>.
	</p>

	<div class="flex flex-row flex-wrap gap-2 lg:gap-4">
		<a
			href="https://github.com/matteopolak"
			class="btn btn-github btn-sm md:btn-md lg:btn-lg"
		>
			<GitHub /> GitHub
		</a>
		<a
			href="https://linkedin.com/in/matteo-polak"
			class="btn btn-linkedin btn-sm md:btn-md lg:btn-lg"
		>
			<LinkedIn /> LinkedIn
		</a>
		<a href="/blog" class="btn btn-accent btn-sm md:btn-md lg:btn-lg">
			<Blog /> Blog
		</a>
	</div>
</section>

<style>
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.blob {
		@apply filter blur-3xl rounded-full animate-blob absolute opacity-40 mix-blend-multiply;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
