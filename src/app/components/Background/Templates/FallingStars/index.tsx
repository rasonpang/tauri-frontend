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
		const initialStars: any = Array.from({ length: 20 }, () => {
			const direction =
				Math.random() < 0.5
					? "leftToRight"
					: "rightToLeft";
			return {
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
				rotation: Math.random() * 360,
				direction,
			};
		});
		setStars(initialStars);
	}

	function controller() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const newStars: any = stars().map((star: any) => {
			const newY = star.y + star.speed;
			const newX =
				star.direction === "leftToRight"
					? star.x + star.speed
					: star.x - star.speed;
			const newRotation: any = star.rotation + 2; // Adjust rotation speed as needed

			if (
				newY > canvas.height ||
				newX > canvas.width ||
				newX < 0
			) {
				const direction = star.direction;
				return {
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
					speed: star.speed,
					rotation: Math.random() * 360,
					direction,
				};
			}
			drawStar(newX, newY, newRotation);
			return {
				...star,
				x: newX,
				y: newY,
				rotation: newRotation,
			};
		});
		setStars(newStars);
		requestAnimationFrame(controller);
	}

	const drawStar = (x: number, y: number, rotation: number) => {
		ctx.save();
		ctx.translate(x + 25, y + 25); // Move the center of rotation to the center of the star
		ctx.rotate((rotation * Math.PI) / 180);
		ctx.drawImage(assets.star, -25, -25, 50, 50); // Draw the star with its center at the origin
		ctx.restore();
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
