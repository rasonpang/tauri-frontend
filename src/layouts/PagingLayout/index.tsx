import styles from "./style.module.css";

const PagingLayout = (props: any) => {
	return (
		<div>
			<div className={styles.header}></div>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

export default PagingLayout;
