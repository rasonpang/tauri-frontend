import styles from "./style.module.css";

import Marquee from "@/app/components/Marquee";
import Background from "../..";

interface Props {
	hideStar?: boolean;
	hideMarquee?: boolean;
	maxScrollVH?: number;

	starSize?: string;
	maxStarSize?: string;

	class?: any;
	style?: string;
}

const MarqueeStarBackground = (props: Props) => {
	const containerStyles = [
		`--star-size: ${props?.starSize ?? "20dvw"}`,
		`--max-star-size: ${props?.maxStarSize ?? "200px"}`,
		props.style,
	];

	return (
		<Background
			class={`${styles.container} ${props.class ?? ""}`}
			style={`${containerStyles.join(";")}`}
			maxScrollVH={props.maxScrollVH}
		>
			{/* Stars */}
			{!!props.hideStar == false && (
				<>
					<div
						id={styles.stars}
						class={styles.stars}
					>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
					</div>
					<div
						id={styles.stars_2}
						class={styles.stars}
					>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
						<img
							src="shapes/star.svg"
							alt="star"
						/>
					</div>
				</>
			)}

			{/* Marques */}
			{!!props.hideMarquee == false && (
				<>
					<div
						id={styles.marquee_1}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_2}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
					<div
						id={styles.marquee_3}
						class={styles.marquee}
					>
						<Marquee>Resume</Marquee>
					</div>
				</>
			)}
		</Background>
	);
};

export default MarqueeStarBackground;
