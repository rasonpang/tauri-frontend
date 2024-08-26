import styles from "./style.module.css";

const Chatbox = (props: any) => {
	const styleVars = {
		"--bg": props?.bgColor ?? "green",
		"--size": `${props.size ?? 15}px`,
	};
	return (
		<div className={styles.container} style={styleVars}>
			{props.children}
		</div>
	);
};

export default Chatbox;
