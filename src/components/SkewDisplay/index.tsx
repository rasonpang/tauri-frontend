import React from "react";
import styles from "./style.module.css";

interface SkewDisplayProps {
	children: any;
	color?: string;
}

const SkewDisplay = (props: SkewDisplayProps) => {
	const ElementList: any =
		Array.isArray(props.children) == false
			? [props.children]
			: props.children;

	const containerStyles = {
		"--hover-background": props.color ?? "blueviolet",
	} as React.CSSProperties;

	return (
		<div className={styles.container} style={containerStyles}>
			{ElementList.map((element: any, key: any) => (
				<div key={key}>{element}</div>
			))}
		</div>
	);
};

export default SkewDisplay;
