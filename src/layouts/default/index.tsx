import styles from "./style.module.css";

const Layout = (props: any) => {
	return (
		<div>
			<div class={styles.header}></div>
			<div class={styles.content}>{props.children}</div>
		</div>
	);
};

export default Layout;
