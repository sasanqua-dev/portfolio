<script setup lang="ts">
	const cardDisplaySurface = ref('front');
	const cardDisplaySurfaceToggle = () => {
		cardDisplaySurface.value = cardDisplaySurface.value === 'front' ? 'back' : 'front';
	};
</script>
<template>
	<div>
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content text-center">
				<div class="max-w-lg">
					<div class="relative inline-flex">
						<div class="rounded-xl block overflow-hidden">
							<img v-if="cardDisplaySurface == 'front'" src="/cards/front.png" class="w-full h-full object-cover" />
							<img v-if="cardDisplaySurface == 'back'" src="/cards/back.png" class="w-full h-full object-cover" />
						</div>
					</div>
					<div class="flex md:hidden flex-wrap">
						<div class="w-1/2 flex gap-3 p-2">
							<a target="_blank" href="https://x.com/sasanqua_dev">
								<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204" class="w-6 h-6">
									<path
										fill="#1d9bf0"
										d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
									/>
								</svg>
							</a>
							X
						</div>
						<div class="w-1/2 flex gap-3 p-2">
							<a target="_blank" href="https://github.com/sasanqua-dev">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</a>
							Github
						</div>
						<div class="w-1/2 flex gap-3 p-2">
							<a target="_blank" href="https://zenn.dev/sasanqu_a">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 88.3 88.3"
									style="enable-background: new 0 0 88.3 88.3"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g fill="#3EA8FF">
										<path class="st0" d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9   C2.8,82.5,3.2,83.3,3.9,83.3z" />
										<path
											class="st0"
											d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1   h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
										/>
									</g>
								</svg>
							</a>
							Zenn
						</div>
						<div class="w-1/2"></div>
					</div>
					<div class="hidden md:flex w-full gap-3 m-1">
						<div>
							<a target="_blank" href="https://x.com/sasanqua_dev">
								<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204" class="w-6 h-6">
									<path
										fill="#1d9bf0"
										d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
									/>
								</svg>
							</a>
						</div>
						<div>
							<a target="_blank" href="https://github.com/sasanqua-dev">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</a>
						</div>
						<div>
							<a target="_blank" href="https://zenn.dev/sasanqu_a">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 88.3 88.3"
									style="enable-background: new 0 0 88.3 88.3"
									xml:space="preserve"
									class="h-6 w-6"
								>
									<g fill="#3EA8FF">
										<path class="st0" d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9   C2.8,82.5,3.2,83.3,3.9,83.3z" />
										<path
											class="st0"
											d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1   h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
										/>
									</g>
								</svg>
							</a>
						</div>
						<!-- <button class="btn btn-circle btn-xs" @click="cardDisplaySurfaceToggle">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						</button> -->
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-start justify-center flex-wrap md:flex-nowrap">
			<div class="w-full md:w-1/2 md:max-w-96">
				<Profile />
			</div>
			<div class="w-full">
				<Projects />
				<Event />
			</div>
		</div>
	</div>
</template>
<style>
	.card {
		--ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
		.face {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			backface-visibility: hidden;
			transition: rotate 0.8s var(--ease-out-cubic);
		}
		.front {
			rotate: 0 1 0 0deg;
		}
		.back {
			rotate: 0 1 0 180deg;
		}
		@media (any-hover: hover) {
			&:hover {
				.front {
					rotate: 0 1 0 180deg;
				}
				.back {
					rotate: 0 1 0 360deg;
				}
			}
		}
	}
</style>
