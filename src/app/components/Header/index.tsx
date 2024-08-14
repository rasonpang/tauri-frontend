import { createSignal } from "solid-js";
import styles from "./style.module.css";

interface Props {
	children: any;
	class?: string;
}

const Header = (props: Props) => {
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
			class={`${styles.header} ${props.class ?? ""} ${
				headerVisibility() === false
					? styles["header-hide"]
					: ""
			}`}
		>
			{props.children}
		</div>
	);
};

export default Header;
