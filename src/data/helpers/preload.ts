export async function loadAssets(assets: any): Promise<any> {
	// Check if assets is an array or an object
	const isArray = Array.isArray(assets);
	const entries = isArray
		? assets.map((src: any, index: number) => [index, src])
		: Object.entries(assets);

	const loadedAssets: any = await Promise.all(
		entries.map(
			([key, src]: any) =>
				new Promise((resolve) => {
					let image = new Image();
					image.src = src;
					image.onload = () =>
						resolve([key, image]);
				})
		)
	);

	// Convert the array of [key, image] back to an array or object
	if (isArray) {
		return loadedAssets.map(
			([_, image]: [number, HTMLImageElement]) => image
		);
	} else {
		return Object.fromEntries(loadedAssets);
	}
}
