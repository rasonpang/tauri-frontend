import styles from "./style.module.css";

const Background = (props: any) => {
	return (
		<div class={`${styles.container} ${props.class}`}>
			{props.children}
		</div>
	);
};

export default Background;
