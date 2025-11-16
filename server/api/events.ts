export default defineEventHandler(async (event) => {
	const data = await fetch('https://portfolio.shiron-system.net/api/collections/events/records?sort=-start_date')
		.then(async(res) => await res.json())
		.catch(() => null) as Promise<Event[] | null>;

	return {
		success: true,
		data: data,
	};
});
