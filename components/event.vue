<template>
	<div>
		<div class="flex flex-col gap-1">
			<div class="p-4">
				<div class="flex flex-wrap border rounded-xl text-start items-start justify-start">
					<div class="w-full m-3 font-bold text-xl border-b-2 border-primary pb-2">Footprint</div>
					<ul class="timeline timeline-vertical timeline-start">
						<li v-for="event in eventdata">
							<hr />
							<div class="timeline-start">{{ event.start_date.split(' ')[0] }}</div>
							<div class="timeline-middle">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="timeline-end">
								<div class="border rounded-xl m-1 p-2 md:w-56 lg:w-80 xl:w-96">
									<div>
										<span class="font-bold">
											<NuxtLink :to="event.event || ''" :class="{ underline: event.event != null }" target="_blank">{{ event.name }} </NuxtLink>
										</span>
										<span class="badge badge-primary badge-outline ml-2" v-if="event.category != null">{{ event.category }}</span>
									</div>
									<div class="ml-1 text-xs my-1 text-gray-800">
										<span class="mr-1" v-for="tg in event.tag" :key="tg">{{ tg }}</span>
									</div>
									<div class="ml-1 text-xs my-1 text-gray-800" v-if="event.sponsored != ''">主催: {{ event.sponsored }}</div>
									<div class="badge flex gap-2" v-if="event.reward != ''">
										<svg xmlns="http://www.w3.org/2000/svg" width="200" height="169.002" viewBox="0 0 200 169.002" class="h-3 w-3 text-primary">
											<path
												d="M1850.217,332.258,1805.088,408.6l-54.871-40.268,21.458,102.046,157.084.006,21.458-102.045-54.868,40.268Zm-78.588,147.474V501.26h157.179V479.733Z"
												transform="translate(-1750.217 -332.258)"
											/>
										</svg>
										{{ event.reward }}
									</div>
									<div class="mt-1">
										<div v-if="event.repo">
											<NuxtLink :to="event.repo" class="flex items-center gap-1 underline" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="size-4">
													<path
														d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
													/>
												</svg>
												{{ event.repo.split('/')[3] }}/{{ event.repo.split('/')[4] }}
											</NuxtLink>
										</div>
										<div v-if="event.slide">
											<NuxtLink :to="event.slide" class="flex items-center gap-1 underline" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
													/>
												</svg>

												{{ event.slide.split('/')[3] }}/{{ event.slide.split('/')[4] }}
											</NuxtLink>
										</div>
									</div>
								</div>
							</div>
							<hr />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	import type { Event } from '@/schema/events';
	const { data: eventdataApi } = await useFetch<{
		success: boolean;
		data: {
			items: Event[];
		};
		count: number;
	}>('/api/events');
	const eventdata = eventdataApi.value?.data.items || [];
</script>
