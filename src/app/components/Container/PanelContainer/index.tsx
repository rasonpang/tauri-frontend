import { createMemo, JSX } from "solid-js";
import styles from "./style.module.css";

interface Props {
	children?: JSX.Element;
	glowColor?: string;
}

const PanelContainer = (props: Props) => {
	const containerStyle = createMemo(() => {
		return `--color: ${props.glowColor ?? "rgba(0, 0, 0, 0.5)"}`;
	});

	return (
		<div class={styles.container} style={containerStyle()}>
			{props.children}
		</div>
	);
};

export default PanelContainer;
