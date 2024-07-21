import styles from "./style.module.css";

const InfoCard = () => {
	return (
		<div class={`${styles.container}`}>
			<div class={styles.wrapper_left}>
				<span id={styles.card_chip}>
					<img src="shapes/creditcard.svg"></img>
				</span>
				<span id={styles.name}>Pang Sheng Wei</span>
				<span
					id={`${styles.working_since}`}
					class="center-y"
				>
					<span id={styles.title}>
						WORKING SINCE
					</span>
					<span id={styles.date}>05/19</span>
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
					<h1>Software Developer</h1>
					<hr />
					<h1>Web Developer</h1>
				</div>
				<div class={styles.corner}></div>
			</div>
		</div>
	);
};

export default InfoCard;
