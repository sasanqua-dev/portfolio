<template>
	<div>
		<div class="flex flex-col gap-1">
			<div class="p-4">
				<div class="flex flex-wrap border rounded-xl text-start items-start justify-start">
					<div class="w-full m-3 font-bold text-xl border-b-2 border-primary pb-2">Footprint</div>
					<ul class="timeline timeline-vertical timeline-start">
						<li v-for="event in eventdata">
							<hr />
							<div class="timeline-start">{{ event.date }}</div>
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
											<NuxtLink :to="event.link || ''" :class="{ underline: event.link != null }" target="_blank">{{ event.name }} </NuxtLink>
										</span>
										<span class="badge badge-primary badge-outline ml-2" v-if="event.tag != null">{{ event.tag }}</span>
									</div>
									<div class="ml-1 text-xs my-1 text-gray-800">主催: {{ event.sponsorship }}</div>
									<div class="badge flex gap-2" v-if="event.result">
										<svg xmlns="http://www.w3.org/2000/svg" width="200" height="169.002" viewBox="0 0 200 169.002" class="h-3 w-3 text-primary">
											<path
												d="M1850.217,332.258,1805.088,408.6l-54.871-40.268,21.458,102.046,157.084.006,21.458-102.045-54.868,40.268Zm-78.588,147.474V501.26h157.179V479.733Z"
												transform="translate(-1750.217 -332.258)"
											/>
										</svg>
										{{ event.result }}
									</div>
									<div class="mt-1">
										<div v-for="gh in event.github">
											<NuxtLink :to="gh" class="flex items-center gap-1 underline" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="size-4">
													<path
														d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
													/>
												</svg>
												{{ gh.split('/')[3] }}/{{ gh.split('/')[4] }}
											</NuxtLink>
										</div>
										<div v-if="event.speakdeck">
											<NuxtLink :to="event.speakdeck" class="flex items-center gap-1 underline text-sm" target="_blank">
												<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32" class="size-4">
													<path
														d="M 8 8 C 5.243 8 3 10.243 3 13 C 3 15.757 5.243 18 8 18 L 14 18 C 14.551 18 15 18.448 15 19 C 15 19.552 14.551 20 14 20 L 5 20 C 3.896 20 3 20.896 3 22 C 3 23.104 3.896 24 5 24 L 14 24 C 16.757 24 19 21.757 19 19 C 19 16.243 16.757 14 14 14 L 8 14 C 7.449 14 7 13.552 7 13 C 7 12.448 7.449 12 8 12 L 15 12 C 16.104 12 17 11.104 17 10 C 17 8.896 16.104 8 15 8 L 8 8 z M 18.445312 8 C 18.789313 8.59 19 9.268 19 10 C 19 10.734 18.783453 11.409 18.439453 12 L 24 12 C 24.552 12 25 12.448 25 13 L 25 19 C 25 19.552 24.552 20 24 20 L 20.919922 20 C 20.695922 21.556 19.963672 22.949 18.888672 24 L 25 24 C 27.209 24 29 22.209 29 20 L 29 12 C 29 9.791 27.209 8 25 8 L 18.445312 8 z"
													></path>
												</svg>
												登壇スライド
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
	const eventdata = [
		{
			name: 'Progate Bar',
			date: '2024/11/28',
			tag: 'LT登壇',
			result: null,
			sponsorship: '株式会社Progate',
			link: 'https://progate.connpass.com/event/335386/',
			github: [],
			speakdeck: 'https://speakerdeck.com/sasanqua/regasitoxiang-kihe-u',
		},
		{
			name: 'Electric Sheep 2024',
			date: '2024/09/14 - 2024/09/16',
			tag: 'ハッカソン',
			result: null,
			sponsorship: '名古屋テレビ',
			link: 'https://www.nagoyatv.com/hackathon-electricsheep/',
			github: ['https://github.com/concerto0916/io_python'],
		},
		{
			name: 'サマーインターン',
			date: '2024/09/02 - 2024/09/13',
			tag: 'インターン',
			result: null,
			sponsorship: 'LayerX',
			link: 'https://tech.layerx.co.jp/entry/2024/05/09/182525',
			github: [],
		},
		{
			name: 'Progate BAR',
			date: '2024/08/05',
			tag: 'LT登壇',
			result: null,
			sponsorship: '株式会社Progate',
			link: 'https://progate.connpass.com/event/323831/',
			github: [],
			speakdeck: 'https://speakerdeck.com/sasanqua/tonnerujue-tutele-sitai',
		},
		{
			name: 'Progateハッカソン powered by AWS',
			date: '2024/06/22 ~ 2024/06/23',
			tag: 'ハッカソン',
			result: '企業賞受賞',
			sponsorship: '株式会社Progate',
			link: 'https://progate.connpass.com/event/317774/',
			github: ['https://github.com/prog8-fukurou/frontend', 'https://github.com/prog8-fukurou/backend'],
		},
		{
			name: '技育博',
			date: '2024/05/12',
			tag: null,
			result: '企業賞受賞',
			sponsorship: '株式会社サポーターズ',
			link: null,
		},
		{
			name: 'DevSecOpsThon2024',
			date: '2024/04/27 ~ 2024/04/29',
			tag: 'ハッカソン',
			result: null,
			sponsorship: 'GMOインターネットグループ株式会社',
			link: null,
			github: ['https://github.com/sasanqua-dev/dsot2024-d'],
		},
		{
			name: '技育キャンプハッカソン vol.1',
			date: '2024/03/09 ~ 2024/03/10',
			tag: 'ハッカソン',
			result: null,
			sponsorship: '株式会社サポーターズ',
			link: null,
			github: ['https://github.com/sasanqua-dev/KeyGuessr'],
		},
		{
			name: '技育キャンプハッカソン vol.15',
			date: '2024/02/24 ~ 2024/02/25',
			tag: 'ハッカソン',
			result: null,
			sponsorship: '株式会社サポーターズ',
			link: null,
			github: ['https://github.com/solufit/at-me'],
		},
	];
</script>
