import styles from "./style.module.css";

const SteamFrame = (props: any) => {
	const size = props.size ? props.size + "px" : "200px";

	return (
		<div
			className={`${styles.container} center`}
			style={{ width: size, height: size }}
		>
			<img
				className={styles.frame}
				src={props.src}
				alt="steam-frame"
			></img>
			<div className={styles.wrapper}>{props.children}</div>
		</div>
	);
};

export default SteamFrame;
