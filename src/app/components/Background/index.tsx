import { JSX } from "solid-js";
import styles from "./style.module.css";

interface Props {
	class?: any;
	style?: any;
	children?: JSX.Element;
}

const Background = (props: Props) => {
	return (
		<div
			class={`${styles.container} ${props.class ?? ""}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
};

export default Background;
