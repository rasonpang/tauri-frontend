import styles from "./style.module.css";

import Marquee from "@/app/components/Marquee";
import Background from "../..";

interface Props {
	hideStar?: boolean;
	hideMarquee?: boolean;

	backgroundImage?: string;
	starSize?: string;
	maxStarSize?: string;
}

const MarqueeStarBackground = (props: Props) => {
	const containerStyles = [
		`background-image: ${
			props?.backgroundImage ??
			`linear-gradient(
			to right,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0) 5%,
			rgba(255, 255, 255, 0) 95%,
			rgba(255, 255, 255, 0.1) 100%
		)`
		}`,
		`--star-size: ${props?.starSize ?? "20dvw"}`,
		`--max-star-size: ${props?.maxStarSize ?? "200px"}`,
	];

	return (
		<Background
			class={styles.first_section_bg}
			style={`background-image: ${containerStyles.join(";")}`}
		>
			{/* Stars */}
			{!!props.hideStar == false && (
				<>
					<div
						id={styles.stars}
						class={styles.stars}
					>
						<img src="shapes/star.svg" />
						<img src="shapes/star.svg" />
						<img src="shapes/star.svg" />
					</div>
					<div
						id={styles.stars_2}
						class={styles.stars}
					>
						<img src="shapes/star.svg" />
						<img src="shapes/star.svg" />
						<img src="shapes/star.svg" />
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
