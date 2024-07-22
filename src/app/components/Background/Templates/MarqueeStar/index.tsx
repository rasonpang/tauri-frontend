import styles from "./style.module.css";

import Marquee from "@/app/components/Marquee";
import Background from "../..";

const MarqueeStarBackground = () => {
	return (
		<Background class={styles.first_section_bg}>
			{/* Stars */}
			<div id={styles.stars} class={styles.stars}>
				<img src="shapes/star.svg" />
				<img src="shapes/star.svg" />
				<img src="shapes/star.svg" />
			</div>
			<div id={styles.stars_2} class={styles.stars}>
				<img src="shapes/star.svg" />
				<img src="shapes/star.svg" />
				<img src="shapes/star.svg" />
			</div>

			{/* Marques */}
			<div id={styles.marquee_1} class={styles.marquee}>
				<Marquee>Resume</Marquee>
			</div>
			<div id={styles.marquee_2} class={styles.marquee}>
				<Marquee>Resume</Marquee>
			</div>
			<div id={styles.marquee_3} class={styles.marquee}>
				<Marquee>Resume</Marquee>
			</div>
		</Background>
	);
};

export default MarqueeStarBackground;
