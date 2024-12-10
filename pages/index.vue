
<template>
	<div>
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content text-center">
				<div class="max-w-lg">
					<Cards />
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
