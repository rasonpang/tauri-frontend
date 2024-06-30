import styles from "./style.module.css";

interface SkewDisplayProps {
	children: any;
	color?: string;
}

const SkewDisplay = (props: SkewDisplayProps) => {
	const ElementList: Element[] =
		Array.isArray(props.children) == false
			? [props.children]
			: props.children;

	const containerStyles = {
		"--hover-background": props.color ?? "blueviolet",
	};

	return (
		<div class={styles.container} style={containerStyles}>
			{ElementList.map((element: Element) => (
				<div>{element}</div>
			))}
		</div>
	);
};

export default SkewDisplay;
