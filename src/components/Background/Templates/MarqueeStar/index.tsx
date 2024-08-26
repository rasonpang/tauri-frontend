import styles from "./style.module.css";

import Marquee from "@/components/Marquee";
import Background from "../..";

interface Props {
	hideStar?: boolean;
	hideMarquee?: boolean;
	maxScrollVH?: number;

	starSize?: string;
	maxStarSize?: string;

	class?: any;
	style?: any;
}

const MarqueeStarBackground = (props: Props) => {
	const containerStyles = {
		...{
			"--star-size": props.starSize ?? "20vw",
			"--max-star-size": props.maxStarSize ?? "200px",
		},
		...props.style,
	};

	return (
		<Background
			class={`${styles.container} ${props.class ?? ""}`}
			style={containerStyles}
			maxScrollVH={props.maxScrollVH}
		>
			<div>
				{/* Stars */}
				{!!props.hideStar == false && (
					<>
						<div
							id={styles.stars}
							className={styles.stars}
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
							className={styles.stars}
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
							className={
								styles.marquee
							}
						>
							<Marquee>
								<div>
									Resume
								</div>
							</Marquee>
						</div>
						<div
							id={styles.marquee_2}
							className={
								styles.marquee
							}
						>
							<Marquee>
								<div>
									Resume
								</div>
							</Marquee>
						</div>
						<div
							id={styles.marquee_3}
							className={
								styles.marquee
							}
						>
							<Marquee>
								<div>
									Resume
								</div>
							</Marquee>
						</div>
					</>
				)}
			</div>
		</Background>
	);
};

export default MarqueeStarBackground;
