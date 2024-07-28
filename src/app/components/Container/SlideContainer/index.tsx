import { onMount } from "solid-js";
import styles from "./style.module.css";

const SlideContainer = (props: any) => {
	let container: any;
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
			class={`${classes.hidden} ${styles.container}`}
		>
			{props.children}
		</div>
	);
};

export default SlideContainer;
