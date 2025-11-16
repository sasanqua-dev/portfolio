export default defineEventHandler((event) => {
	// Sample projects data that could be fetched from a database
	const projects = [
		{
			id: 1,
			name: 'Anemos',
			icon: 'https://siesta.r2.solufit.net/anemos_icon.png',
			description: 'APIを通して公開されている情報から開発者に価値のあるデータを提供するためのシステム',
			techStack: ['Python'],
			link: 'https://anemos.solufit.net',
			github: '',
		},
		{
			id: 2,
			name: 'shiron',
			icon: 'https://r2.shiron-system.net/shiron_system_icon.png',
			description: 'コミュニティ管理を効率化するためのシステム',
			techStack: ['Python', 'Nuxt'],
			link: 'https://shiron-system.net',
			github: '',
		},
	];

	return {
		success: true,
		data: projects,
		count: projects.length,
	};
});
