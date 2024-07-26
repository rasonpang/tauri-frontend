import styles from "./style.module.css";

const SteamFrame = (props: any) => {
	const size = props.size ? props.size + "px" : "200px";

	return (
		<div
			class={`${styles.container} center`}
			style={`width: ${size}; height: ${size};`}
		>
			<img
				class={styles.frame}
				src={props.src}
				alt="steam-frame"
			></img>
			<div class={styles.wrapper}>{props.children}</div>
		</div>
	);
};

export default SteamFrame;
