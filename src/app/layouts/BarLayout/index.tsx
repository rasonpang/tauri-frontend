import { createSignal } from "solid-js";
import styles from "./style.module.css";

const BarLayout = (props: any) => {
	const [headerVisibility, setHeaderVisibility] = createSignal(true);

	const onScroll = (e: any) => {
		let scrollPos;
		if (e.wheelDeltaY < 0) scrollPos = "down";
		else if (e.wheelDeltaY > 0) scrollPos = "up";

		setHeaderVisibility(scrollPos === "up" ? true : false);
	};

	window.addEventListener("wheel", onScroll);

	return (
		<div class={styles.container}>
			<div
				class={`${styles.header} ${
					headerVisibility() === false ? styles["header-hide"] : ""
				}`}
			>
				Header
			</div>
			<div class={styles.content}>{props.children}</div>
		</div>
	);
};

export default BarLayout;
