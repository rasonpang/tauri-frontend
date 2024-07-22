import styles from "./style.module.css";

interface Props {
	value: number;
	max: number;
	iconSrc: string;
}

const CircularProgressBar = (props: Props) => {
	const { value, max } = props;
	const radius = 50;
	const strokeWidth = 10;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const progress = value / max;

	return (
		<div class={styles.container}>
			<svg
				height={radius * 2}
				width={radius * 2}
				class={styles.progressSvg}
			>
				<circle
					stroke="black"
					fill="transparent"
					stroke-width={strokeWidth}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke="blue"
					fill="transparent"
					stroke-width={strokeWidth}
					stroke-dasharray={`${circumference} ${circumference}`}
					style={{
						"stroke-dashoffset": String(
							circumference -
								progress *
									circumference
						),
					}}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</svg>
			<div class={styles.imageContainer}>
				<img
					src={props.iconSrc}
					alt="JS Logo"
					class={styles.image}
				/>
			</div>
		</div>
	);
};

export default CircularProgressBar;
