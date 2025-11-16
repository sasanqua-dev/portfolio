<template>
	<div class="container mx-auto p-8">
		<h1 class="text-3xl font-bold mb-8">API Demo</h1>

		<!-- Health Check -->
		<div class="card bg-base-100 shadow-xl mb-6">
			<div class="card-body">
				<h2 class="card-title">Health Check API</h2>
				<p class="text-sm text-gray-600">GET /api/health</p>
				<button class="btn btn-primary" @click="checkHealth">Check Health</button>
				<pre v-if="healthData" class="bg-gray-100 p-4 rounded mt-4">{{ JSON.stringify(healthData, null, 2) }}</pre>
			</div>
		</div>

		<!-- Projects API -->
		<div class="card bg-base-100 shadow-xl mb-6">
			<div class="card-body">
				<h2 class="card-title">Projects API</h2>
				<p class="text-sm text-gray-600">GET /api/projects</p>
				<button class="btn btn-primary" @click="fetchProjects">Fetch Projects</button>
				<pre v-if="projectsData" class="bg-gray-100 p-4 rounded mt-4">{{ JSON.stringify(projectsData, null, 2) }}</pre>
			</div>
		</div>

		<!-- GitHub User API -->
		<div class="card bg-base-100 shadow-xl mb-6">
			<div class="card-body">
				<h2 class="card-title">GitHub User API (External API Demo)</h2>
				<p class="text-sm text-gray-600">GET /api/github/:username</p>
				<div class="form-control">
					<label class="label">
						<span class="label-text">GitHub Username</span>
					</label>
					<input type="text" v-model="githubUsername" placeholder="Enter username" class="input input-bordered" />
				</div>
				<button class="btn btn-primary mt-2" @click="fetchGithubUser">Fetch GitHub User</button>
				<div v-if="githubError" class="alert alert-error mt-4">
					<span>{{ githubError }}</span>
				</div>
				<pre v-if="githubData" class="bg-gray-100 p-4 rounded mt-4">{{ JSON.stringify(githubData, null, 2) }}</pre>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const healthData = ref(null);
	const projectsData = ref(null);
	const githubData = ref(null);
	const githubError = ref('');
	const githubUsername = ref('octocat');

	const checkHealth = async () => {
		try {
			const data = await $fetch('/api/health');
			healthData.value = data;
		} catch (error) {
			console.error('Error fetching health:', error);
		}
	};

	const fetchProjects = async () => {
		try {
			const data = await $fetch('/api/projects');
			projectsData.value = data;
		} catch (error) {
			console.error('Error fetching projects:', error);
		}
	};

	const fetchGithubUser = async () => {
		githubError.value = '';
		githubData.value = null;
		try {
			const data = await $fetch(`/api/github/${githubUsername.value}`);
			githubData.value = data;
		} catch (error: any) {
			console.error('Error fetching GitHub user:', error);
			githubError.value = error.data?.message || 'Failed to fetch GitHub user. API may be rate limited.';
		}
	};
</script>
