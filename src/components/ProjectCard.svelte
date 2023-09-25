<script lang="ts">
	export let href: string;
	export let title: string;
	export let description: string;
	export let thumbnail: string;
</script>

<a class="group block" {href}>
	<div
		class="card w-full h-full bg-base-100 shadow-xl image-full max-h-96 hover:shadow-2xl hover:scale-105 transition-all duration-300"
	>
		<figure>
			<img src={thumbnail} alt={title} class="w-full h-full object-cover" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{title}</h2>
			<div class="card-actions justify-start">
				<span class="flex flex-row flex-wrap gap-2">
					<slot name="tags" />
				</span>
				<div class="line-clamp-3">
					<p>
						{description}
					</p>
				</div>
			</div>
		</div>
	</div>
</a>
