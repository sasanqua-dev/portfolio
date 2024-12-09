<template>
	<div>
		<div class="hidden navbar bg-base-100">
			<div class="flex-1">
				<a class="btn btn-ghost text-lg">sasanqua.work</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1">
					<li><a>Projects</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
		</div>
		<slot />
	</div>
</template>
<script setup lang="ts"></script>
