import { onMount } from "solid-js";
import styles from "./style.module.css";

interface Props {
	from?: "left" | "right" | "top" | "bottom";
	children?: any;
}

const SlideContainer = (props: Props) => {
	let container: any;

	let containerStyle: any = [];

	switch (props.from) {
		case "left":
			containerStyle.push("transform: translate(-100%, 0)");
			break;
		case "right":
			containerStyle.push("transform: translate(100%, 0)");
			break;
		default:
			containerStyle.push("transform: translate(-100%, 0)");
	}

	const classes = {
		show: styles.show,
		hidden: styles.default,
	};

	const ObserverCallback: IntersectionObserverCallback = (
		entries: IntersectionObserverEntry[]
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(classes.show);
			} else {
				entry.target.classList.remove(classes.show);
			}
		});
	};

	onMount(() => {
		const observer = new IntersectionObserver(ObserverCallback);
		if (container) observer.observe(container);
	});

	return (
		<div
			ref={container}
			class={`${classes.hidden}`}
			style={containerStyle.join(" ")}
		>
			{props.children}
		</div>
	);
};

export default SlideContainer;
