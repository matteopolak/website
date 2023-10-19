<script lang="ts">
	import { expandWidthOnScroll } from '$lib/animate';

	export let href: string;
	export let title: string;
	export let description: string;
	export let thumbnail: string;
</script>

<a
	class="group block relative rounded-3xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
	{href}
>
	<figure class=" bg-">
		<img
			src={thumbnail}
			alt={title}
			class="w-full object-cover absolute h-96 brightness-[0.5] rounded-3xl"
			loading="lazy"
			use:expandWidthOnScroll
		/>
	</figure>
	<div class="card w-full bg-transparent max-h-96 overflow-hidden h-96">
		<div class="card-body">
			<h2 class="card-title text-neutral-300">{title}</h2>
			<p />
			<div class="card-actions justify-start">
				<span class="flex flex-row flex-wrap gap-2">
					<slot name="tags" />
				</span>
				<div class="line-clamp-3 text-neutral-300">
					<p>
						{description}
					</p>
				</div>
			</div>
		</div>
	</div>
</a>
