import styles from "./style.module.css";

const PictureFrame = (props: any) => {
	const size = props.size ? props.size + "px" : "200px";

	return (
		<div
			class={`${styles.container} all-center`}
			style={`width: ${size}; height: ${size};`}
		>
			<img class={styles.frame} src={props.src}></img>
			<div class={styles.wrapper}>{props.children}</div>
		</div>
	);
};

export default PictureFrame;
