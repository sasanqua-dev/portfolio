export default defineEventHandler(async (event) => {
	const username = getRouterParam(event, 'username');

	if (!username) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Username is required',
		});
	}

	try {
		// Fetch user data from GitHub API
		// Note: GitHub API may rate limit requests without authentication
		const userData = await $fetch(`https://api.github.com/users/${username}`, {
			headers: {
				'User-Agent': 'Nuxt-Portfolio-App',
				Accept: 'application/vnd.github.v3+json',
			},
		});

		return {
			success: true,
			data: userData,
		};
	} catch (error: any) {
		// Return a more detailed error message
		const statusCode = error.statusCode || error.response?.status || 500;
		const message = error.data?.message || error.message || 'Failed to fetch GitHub user data';

		throw createError({
			statusCode: statusCode,
			statusMessage: `GitHub API Error: ${message}`,
			message: `Unable to fetch data for user "${username}". ${statusCode === 403 ? 'API rate limit may have been exceeded.' : ''}`,
		});
	}
});
