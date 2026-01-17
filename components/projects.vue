<template>
	<div class="p-4">
		<div class="w-full flex flex-wrap gap-4">
			<div v-for="pro in projects" class="w-96 flex flex-col gap-2 rounded-xl border border-primary p-3">
				<div class="w-full flex items-center justify-start">
					<div class="w-24">
						<img :src="pro.icon" class="w-20 h-20" />
					</div>
					<div class="w-56">
						<div class="flex gap-2">
							<div class="font-bold text-xl">{{ pro.name }}</div>
							<div class="w-24">
								<a :href="pro.link" target="_blank" class="btn btn-xs"
									><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div class="flex gap-1">
							<span class="badge" v-for="ts in pro.techStack">{{ ts }}</span>
						</div>
						<div class="my-1"></div>
						<div>{{ pro.description }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	const projects = [
	];
</script>
