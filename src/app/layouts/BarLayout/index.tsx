import styles from "./style.module.css";
import Header from "@/app/components/Header";

const BarLayout = (props: any) => {
	return (
		<div class={styles.container}>
			<Header></Header>
			<div class={styles.content}>{props.children}</div>
		</div>
	);
};

export default BarLayout;
