<template>
	<div>
		<div class="flex items-start justify-center flex-wrap md:flex-nowrap">
			<div class="w-full md:w-1/2 md:max-w-96">
				<div class="p-4">
					<div class="border rounded-xl p-6 px-12">
						<div class="w-full flex items-center justify-center avatar">
							<div class="w-24 md:w-36 rounded-full">
								<img :src="profile?.avatar" />
							</div>
						</div>
						<div class="mt-6">
							<div class="text-xl">{{ profile?.name }}</div>
							<div class="text-sm text-gray-800 m-3">
								<div v-for="line in profile?.affiliations" :key="line">{{ line }}</div>
							</div>
						</div>
						<div class="mt-6 flex gap-2">
							<div v-for="social in profile?.socials" :key="social.type">
								<a target="_blank" :href="social.url">
									<AppIcon :name="social.type" />
								</a>
							</div>
						</div>
						<div class="mt-6">
							<Teckstack />
						</div>
					</div>
				</div>
			</div>
			<div class="w-full">
				<Projects />
				<Event />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import type { Profile } from '@/schema/profile';
	const { data } = await useContentJson<Profile>('profile.json');
	const profile = computed(() => data.value);
</script>
