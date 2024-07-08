import styles from "./style.module.css";

const Title = (props: any) => {
	return <div class={styles.title}>{props.children}</div>;
};

export default Title;
