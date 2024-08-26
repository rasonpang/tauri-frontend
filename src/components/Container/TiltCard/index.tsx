import { useState } from "react";
import styles from "./style.module.css";

interface Props {
	children?: any;

	class?: string;
	boxShadowColor?: string;
}

const TiltCard = (props: Props) => {
	let container: any;
	let timer: any;

	const mouseTiltAmplifier = 15;
	const boxShadowColor = props?.boxShadowColor ?? "rgba(0, 0, 0, 0.3)";

	const defaultTiltStyle = {
		transform: `rotateX(0deg) rotateY(0deg)`,
		boxShadow: `0 0 0.5rem 0.3rem ${boxShadowColor}`,
	};
	const [tiltStyle, setTiltStyle] = useState(defaultTiltStyle);

	const onMouseEnter = (e: any) => {
		clearTimeout(timer);

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
		const boxShadow = `${shadowX}px ${shadowY}px 1rem 1rem ${boxShadowColor}`;

		setTiltStyle({
			transform: transform,
			boxShadow: boxShadow,
		});

		// Return to default after 3 seconds
		timer = setTimeout(() => {
			onMouseLeave();
		}, 3000);
	};

	const onMouseLeave = () => {
		setTiltStyle(defaultTiltStyle);
	};

	return (
		<div
			ref={container}
			onMouseMove={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={`${styles.container} ${props.class}`}
			style={tiltStyle}
		>
			{props.children}
		</div>
	);
};

export default TiltCard;
