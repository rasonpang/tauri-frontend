import { onMount } from "solid-js";
import styles from "./style.module.css";

const SlideContainer = (props: any) => {
	let containerRef: any;
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
		if (containerRef) observer.observe(containerRef);
	});

	return (
		<div ref={containerRef} class={classes.hidden}>
			{props.children}
		</div>
	);
};

export default SlideContainer;
