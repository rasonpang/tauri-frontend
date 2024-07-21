import styles from "./style.module.css";

const TiltCard = (props: any) => {
	return (
		<div class={`${styles.container} ${props.class}`}>
			{props.children}
		</div>
	);
};

export default TiltCard;
