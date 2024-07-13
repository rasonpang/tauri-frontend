import { createSignal, onMount } from "solid-js";

const FallingStars = () => {
	let canvas: any;
	let ctx: any;

	// ASSETS
	let assets: any = {
		star: "star.png",
	};

	const [stars, setStars] = createSignal([]);

	onMount(async () => {
		await loadAssets();
		// Canvas
		ctx = canvas.getContext("2d");
		fixDpi();

		initStars();
		requestAnimationFrame(controller);
	});

	// HELPERS
	async function loadAssets() {
		const newAssets = await Promise.all(
			Object.keys(assets).map(
				(imgKey) =>
					new Promise((resolve) => {
						let image = new Image();
						image.src = assets[imgKey];
						image.onload = () =>
							resolve({
								[imgKey]: image,
							});
					})
			)
		);

		assets = newAssets.reduce((prev: any, curr: any) => {
			return {
				...prev,
				...curr,
			};
		}, {});
	}
	function fixDpi() {
		let dpi: any = window.devicePixelRatio;
		//get CSS height
		//the + prefix casts it to an integer
		//the slice method gets rid of "px"
		let h = +getComputedStyle(canvas)
			.getPropertyValue("height")
			.slice(0, -2);
		//get CSS width
		let w = +getComputedStyle(canvas)
			.getPropertyValue("width")
			.slice(0, -2);
		//scale the canvas
		canvas.setAttribute("height", h * dpi);
		canvas.setAttribute("width", w * dpi);
	}

	// CORE_LOGICS
	function initStars() {
		let initialStars: any = [];
		for (let i = 0; i < 20; i++) {
			const direction =
				Math.random() < 0.5
					? "leftToRight"
					: "rightToLeft";
			initialStars.push({
				x:
					direction === "leftToRight"
						? Math.random() *
						  canvas.width *
						  0.5
						: canvas.width * 0.5 +
						  Math.random() *
								canvas.width *
								0.5,
				y: Math.random() * canvas.height * -0.5,
				speed: Math.random() * 2 + 1,
				direction: direction,
			});
		}
		setStars(initialStars);
	}

	function controller() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let newStars: any = stars().map((star: any) => {
			let newX = star.x;
			let newY = star.y + star.speed;

			if (star.direction === "leftToRight") {
				newX = star.x + star.speed;
				if (
					newX > canvas.width ||
					newY > canvas.height
				) {
					newX =
						Math.random() *
						canvas.width *
						0.5;
					newY =
						Math.random() *
						canvas.height *
						-0.5;
				}
			} else {
				newX = star.x - star.speed;
				if (newX < 0 || newY > canvas.height) {
					newX =
						canvas.width * 0.5 +
						Math.random() *
							canvas.width *
							0.5;
					newY =
						Math.random() *
						canvas.height *
						-0.5;
				}
			}

			drawStar(newX, newY);
			return { ...star, x: newX, y: newY };
		});
		setStars(newStars);
		requestAnimationFrame(controller);
	}

	const drawStar = (x: number, y: number) => {
		ctx.drawImage(assets.star, x, y, 50, 50);
	};

	const styles: any = {
		canvas: {
			width: "100%",
			height: "100%",
		},
	};

	return <canvas ref={canvas} style={styles.canvas}></canvas>;
};

export default FallingStars;
