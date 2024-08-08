import MarqueeStarBackground from "../../Background/Templates/MarqueeStar";
import TiltCard from "../../Container/TiltCard";
import styles from "./style.module.css";

import me from "@/data/constants/me.json";

const InfoCard = () => {
	return (
		<TiltCard
			class={styles.info_card}
			boxShadowColor="rgba(255, 255, 255, 0.3)"
		>
			<MarqueeStarBackground
				hideMarquee={true}
				starSize="70px"
			/>
			<div class={`${styles.container}`}>
				<div class={styles.wrapper_left}>
					<span id={styles.card_chip}>
						<img
							src="shapes/creditcard.svg"
							alt="credit-card-chip"
						></img>
					</span>
					<span id={styles.name}>{me.name}</span>
					<span
						id={`${styles.working_since}`}
						class="center-y"
					>
						<span id={styles.title}>
							WORKING SINCE
						</span>
						<span id={styles.date}>
							{me.workingSince}
						</span>
					</span>
				</div>
				<div class={`${styles.wrapper_right}`}>
					<div
						id={styles.card_title}
						class={styles.corner}
					>
						<i>Info Card</i>
					</div>
					<div id={styles.role}>
						<h1>Web Developer</h1>
						<hr />
						<h1>Software Developer</h1>
					</div>
					<div class={styles.corner}></div>
				</div>
			</div>
		</TiltCard>
	);
};

export default InfoCard;
