<script lang="ts">
	export let href: string;
	export let title: string;
	export let description: string;
	export let thumbnail: string;
</script>

<a class="group block" {href}>
	<div
		class="card relative bg-base-100 shadow-xl image-full before:w-full before:h-full h-[350px]"
	>
		<figure>
			<img src={thumbnail} alt={title} class="w-full h-full object-cover" />
		</figure>
		<div class="card-body flex justify-between">
			<h2 class="card-title">{title}</h2>
			<div class="flex flex-col gap-3">
				<span class="flex flex-row gap-2">
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
