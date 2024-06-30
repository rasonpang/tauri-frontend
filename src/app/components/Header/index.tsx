import { createSignal } from "solid-js";
import styles from "./style.module.css";

const Header = () => {
	const [headerVisibility, setHeaderVisibility] = createSignal(true);

	const onScroll = (e: any) => {
		// Scrolling down
		if (e.wheelDeltaY < 0) {
			setHeaderVisibility(false);
			// Scrolling up
		} else if (e.wheelDeltaY > 0) {
			setHeaderVisibility(true);
		}
	};

	window.addEventListener("wheel", onScroll);

	return (
		<div
			class={`${styles.header} ${
				headerVisibility() === false
					? styles["header-hide"]
					: ""
			}`}
		>
			Header
		</div>
	);
};

export default Header;
