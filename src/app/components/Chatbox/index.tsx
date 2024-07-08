import styles from "./style.module.css";

const Chatbox = (props: any) => {
	const styleVars = {
		"--bg": props?.bgColor ?? "green",
		"--size": `${props.size ?? 15}px`,
	};
	return (
		<div class={styles.container} style={styleVars}>
			{props.children}
		</div>
	);
};

export default Chatbox;
