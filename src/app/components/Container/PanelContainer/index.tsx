import styles from "./style.module.css";

const PanelContainer = (props: any) => {
	return <div class={styles.container}>{props.children}</div>;
};

export default PanelContainer;
