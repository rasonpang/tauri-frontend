import styles from "./style.module.css";
import Header from "@/components/Header";

const BarLayout = (props: any) => {
	return (
		<div className={styles.container}>
			<Header></Header>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

export default BarLayout;
