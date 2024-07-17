import styles from "./style.module.css";

const Marquee = (props: any) => {
	return (
		<div class={styles.container}>
			<div class={styles.wrapper}>{props.children}</div>
			<div class={styles.wrapper}>{props.children}</div>
		</div>
	);
};

export default Marquee;
