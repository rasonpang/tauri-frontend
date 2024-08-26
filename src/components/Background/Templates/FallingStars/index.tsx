import { useEffect, useState } from "react";

const FallingStars = () => {
	let canvas: any;
	let ctx: any;

	// ASSETS
	let assets: any = {
		star: "logos/general/star.png",
	};

	const [stars, setStars] = useState([]);

	const onLoad = async () => {
		await initializeAssets();
		// Canvas
		ctx = canvas.getContext("2d");
		resetCanvas();

		initStars();
		requestAnimationFrame(controller);
	};

	useEffect(() => {
		onLoad();
	}, []);

	// ASSETS, HELPERS
	async function initializeAssets() {
		const newAssets: any = await Promise.all(
			Object.entries(assets).map(
				([imgKey, imgSrc]: any) =>
					new Promise((resolve) => {
						let image = new Image();
						image.src = imgSrc;
						image.onload = () =>
							resolve([
								imgKey,
								image,
							]);
					})
			)
		);

		assets = Object.fromEntries(newAssets);
	}
	function resetCanvas() {
		let dpi: any = window.devicePixelRatio;

		let canvasStyle = getComputedStyle(canvas);
		const getCanvasProps = (keyName: string) =>
			+canvasStyle.getPropertyValue(keyName).slice(0, -2);

		let height = getCanvasProps("height"),
			width = getCanvasProps("width");

		canvas.setAttribute("height", height * dpi);
		canvas.setAttribute("width", width * dpi);

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	// CORE_LOGICS
	function initStars() {
		const initialStars: any = Array.from({ length: 20 }, () => {
			const direction = Math.random() < 0.5 ? "LR" : "RL";
			const canvasWidth = canvas.width * 0.5;
			// const speed = Math.random() * 2 + 1;
			const speed = Math.random() * 2;

			return {
				x:
					direction === "LR"
						? Math.random() * canvasWidth
						: canvasWidth +
						  Math.random() * canvasWidth,
				y: Math.random() * canvasWidth * -1,
				speed: speed,
				rotation: Math.random() * 360,
				direction,
			};
		});
		setStars(initialStars);
	}

	function controller() {
		resetCanvas();
		// drawBackground(); // Draw the background first

		const newStars: any = stars.map((star: any) => drawStar(star));
		setStars(newStars);

		// drawGround();

		requestAnimationFrame(controller);
	}

	// DRAW
	const drawBackground = () => {
		// Create gradient for sky
		const fillStyle = ctx.createLinearGradient(
			0,
			0,
			0,
			canvas.height
		);
		fillStyle.addColorStop(0, "#000000");
		fillStyle.addColorStop(1, "#000033");

		ctx.fillStyle = fillStyle; // Dark blue to black gradient
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw moon
		ctx.fillStyle = "#FFFFCC";
		ctx.beginPath();
		ctx.arc(
			canvas.width * 0.8,
			canvas.height * 0.2,
			50,
			0,
			Math.PI * 2
		);
		ctx.fill();

		// Draw little stars
		const drawLittleStar = (
			x: number,
			y: number,
			radius: number
		) => {
			ctx.fillStyle = "#FFFFFF";
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.fill();
		};

		for (let i = 0; i < 50; i++) {
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height * 0.7; // Limit stars to upper 70% of canvas
			const radius = Math.random() * 2;
			drawLittleStar(x, y, radius);
		}
	};

	const drawStar = (star: any) => {
		// Update star position
		const newY = star.y + star.speed;
		const newX =
			star.direction === "LR"
				? star.x + star.speed
				: star.x - star.speed;
		const newRotation: any = star.rotation + 2; // Adjust rotation speed as needed

		// Calculate new position
		const canvasWidth = canvas.width * 0.5;
		const canvasHeight = canvas.height * 0.5;

		if (newY > canvas.height || newX > canvas.width || newX < 0) {
			const direction = star.direction;
			return {
				x:
					direction === "LR"
						? Math.random() * canvasWidth
						: canvasWidth +
						  Math.random() * canvasWidth,
				y: Math.random() * canvasHeight * -1,
				speed: star.speed,
				rotation: Math.random() * 360,
				direction,
			};
		}

		// Draw the star
		ctx.save();
		ctx.translate(newX + 25, newY + 25); // Move the center of rotation to the center of the star
		ctx.rotate((newRotation * Math.PI) / 180);
		ctx.drawImage(assets.star, -25, -25, 50, 50); // Draw the star with its center at the origin
		ctx.restore();

		return {
			...star,
			x: newX,
			y: newY,
			rotation: newRotation,
		};
	};

	const drawGround = () => {
		// Draw ground
		const groundHeight = canvas.height * 0.25;

		// Get the computed value of the CSS variable
		const bgPrimary = getComputedStyle(document.documentElement)
			.getPropertyValue("--bg-primary")
			.trim();

		const fillStyle = ctx.createLinearGradient(
			0,
			canvas.height - groundHeight,
			0,
			canvas.height
		);
		fillStyle.addColorStop(0, "#003300");
		fillStyle.addColorStop(1, bgPrimary);

		ctx.fillStyle = fillStyle;

		// Begin path for the curvy ground
		ctx.beginPath();
		ctx.moveTo(0, canvas.height - groundHeight);

		// Define control points for the curves
		const controlPoint1 = {
			x: canvas.width * 0.25,
			y: canvas.height - groundHeight * 1.5,
		};
		const controlPoint2 = {
			x: canvas.width * 0.75,
			y: canvas.height - groundHeight * 0.5,
		};
		const endPoint = {
			x: canvas.width,
			y: canvas.height - groundHeight,
		};

		// Create the curvy path
		ctx.bezierCurveTo(
			controlPoint1.x,
			controlPoint1.y,
			controlPoint2.x,
			controlPoint2.y,
			endPoint.x,
			endPoint.y
		);

		// Draw the bottom part of the ground
		ctx.lineTo(canvas.width, canvas.height);
		ctx.lineTo(0, canvas.height);
		ctx.closePath();

		ctx.fill();
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
