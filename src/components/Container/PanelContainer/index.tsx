import React from "react";
import styles from "./style.module.css";

interface Props {
	children?: JSX.Element;
	glowColor?: string;
}

const PanelContainer = (props: Props) => {
	const containerStyle = {
		"--color": props.glowColor ?? "rgba(0, 0, 0, 0.5)",
	} as React.CSSProperties;

	return (
		<div className={styles.container} style={containerStyle}>
			{props.children}
		</div>
	);
};

export default PanelContainer;
