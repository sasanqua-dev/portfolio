<template>
	<div class="min-h-screen flex items-start justify-center py-10 px-4">
		<div class="w-full max-w-md">
			<div class="flex flex-col items-center text-center">
				<div class="avatar">
					<div class="w-28 rounded-full ring ring-base-200">
						<img :src="links?.avatar" :alt="links?.name" />
					</div>
				</div>
				<div class="mt-4 text-2xl font-semibold">{{ links?.name }}</div>
				<div class="mt-1 text-sm text-gray-600">{{ links?.tagline }}</div>
			</div>

			<div class="mt-8 flex flex-col gap-3">
				<a
					v-for="item in links?.items"
					:key="item.type"
					:target="item.url.startsWith('/') ? undefined : '_blank'"
					rel="noopener"
					:href="item.url"
					class="flex items-center gap-3 w-full rounded-xl border bg-white px-5 py-4 shadow-sm hover:shadow transition active:scale-[0.99]"
				>
					<AppIcon :name="item.type" class="w-6 h-6" />
					<span class="flex-1 font-medium">{{ item.label }}</span>
					<span class="text-xs text-gray-400">{{ item.sublabel }}</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import type { LinksPage } from '@/schema/links';
	useHead({ title: "sasanqua / links" });
	const { data } = await useContentJson<LinksPage>('links.json');
	const links = computed(() => data.value);
</script>
