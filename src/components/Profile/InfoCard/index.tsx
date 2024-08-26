import { getDate } from "@/data/helpers/datetime";
import MarqueeStarBackground from "../../Background/Templates/MarqueeStar";
import TiltCard from "../../Container/TiltCard";
import styles from "./style.module.css";

import me from "@/data/constants/me.json";

const InfoCard = () => {
	return (
		<TiltCard
			className={styles.info_card}
			boxShadowColor="rgba(255, 255, 255, 0.3)"
		>
			<MarqueeStarBackground
				hideMarquee={true}
				starSize="70px"
			/>
			<div className={`${styles.container}`}>
				<div className={styles.wrapper_left}>
					<span id={styles.card_chip}>
						<img
							src="shapes/creditcard.svg"
							alt="credit-card-chip"
						></img>
					</span>
					<span id={styles.name}>{me.name}</span>
					<span
						id={`${styles.working_since}`}
						className="center-y"
					>
						<span id={styles.title}>
							WORKING SINCE
						</span>
						<span id={styles.date}>
							{getDate(
								me.working[0]
									.time
									.from
							)}
						</span>
					</span>
				</div>
				<div className={`${styles.wrapper_right}`}>
					<div
						id={styles.card_title}
						className={styles.corner}
					>
						<i>Info Card</i>
					</div>
					<div id={styles.role}>
						<h1>Web Developer</h1>
						<hr />
						<h1>Software Developer</h1>
					</div>
					<div className={styles.corner}></div>
				</div>
			</div>
		</TiltCard>
	);
};

export default InfoCard;
