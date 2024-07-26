import { createSignal } from "solid-js";
import styles from "./style.module.css";

const TiltCard = (props: any) => {
	let container: any;
	const mouseTiltAmplifier = 15;
	const defaultTiltStyle = {
		transform: `rotateX(0deg) rotateY(0deg)`,
		"box-shadow": `0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.3)`,
	};
	const [tiltStyle, setTiltStyle] = createSignal(defaultTiltStyle);

	const onMouseEnter = (e: any) => {
		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left; // x position within the element
		const y = e.clientY - rect.top; // y position within the element

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const deltaX = (x - centerX) / centerX;
		const deltaY = (y - centerY) / centerY;

		const angleX = Math.floor(deltaY * mouseTiltAmplifier); // Adjust the multiplier for more or less tilt
		const angleY = Math.floor(-deltaX * mouseTiltAmplifier); // Adjust the multiplier for more or less tilt

		const shadowX = deltaX * 20;
		const shadowY = deltaY * 20;

		const transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
		const boxShadow = `${shadowX}px ${shadowY}px 1rem 1rem rgba(0, 0, 0, 0.3)`;

		setTiltStyle({
			transform: transform,
			"box-shadow": boxShadow,
		});
	};

	const onMouseLeave = () => {
		setTiltStyle(defaultTiltStyle);
	};

	return (
		<div
			ref={container}
			onMouseMove={onMouseEnter}
			onMouseLeave={onMouseLeave}
			class={`${styles.container} ${props.class}`}
			style={tiltStyle()}
		>
			{props.children}
		</div>
	);
};

export default TiltCard;
