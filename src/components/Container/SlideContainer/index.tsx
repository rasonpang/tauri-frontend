import { useEffect } from "react";
import styles from "./style.module.css";

interface Props {
	from?: "left" | "right" | "top" | "bottom";
	children?: any;
}

const SlideContainer = (props: Props) => {
	let container: any;

	let containerStyle: any = {};

	switch (props.from) {
		case "left":
			containerStyle["transform"] = "translate(-100%, 0)";
			break;
		case "right":
			containerStyle["transform"] = "translate(100%, 0)";
			break;
		default:
			containerStyle["transform"] = "translate(-100%, 0)";
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

	useEffect(() => {
		const observer = new IntersectionObserver(ObserverCallback);
		if (container) observer.observe(container);
	}, []);

	return (
		<div
			ref={container}
			className={`${classes.hidden}`}
			style={containerStyle}
		>
			{props.children}
		</div>
	);
};

export default SlideContainer;
