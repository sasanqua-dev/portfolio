<template>
	<div>
		<div class="text-xl">Tech Stack</div>
		<div class="text-sm text-gray-800 m-3">
			<div v-for="cat in techstack" :key="cat.category">
				<div class="font-bold my-2">{{ cat.category }}</div>
				<div class="ml-3 flex flex-col gap-2 mt-3">
					<div class="flex gap-2 items-center" v-for="item in cat.items" :key="item.key">
						<div class="w-6">
							<AppIcon :name="item.key" class="h-4 w-4" />
						</div>
						<div>{{ item.label }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import type { TechStackCategory } from '@/schema/techstack';
	const { data } = await useContentJson<TechStackCategory[]>('techstack.json');
	const techstack = computed(() => data.value || []);
</script>
