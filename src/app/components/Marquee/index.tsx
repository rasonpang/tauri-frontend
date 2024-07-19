import { createMemo, createSignal, For, onMount } from "solid-js";
import styles from "./style.module.css";

const Marquee = (props: any) => {
	let container: any;
	let wrapper: any;

	const styleVariables = {
		gap: "1rem",
	};

	const [childList, setChildList] = createSignal([
		<div>{props.children}</div>,
	]);
	const [wrapperStyle, setWrapperStyle] = createSignal([
		`--gap: ${styleVariables.gap}`,
		`--translate-end: -100%`,
	]);

	onMount(() => {
		const childrenWidth = wrapper.children[0].offsetWidth;
		const newCount = Math.floor(
			container.offsetWidth / childrenWidth
		);

		for (let i = 0; i < newCount * 2; i++) {
			setChildList((prev) => [
				...prev,
				<div>{props.children}</div>,
			]);
		}

		const newWrapperStyle = [`--gap: ${styleVariables.gap}`];

		// Calculate Translate End
		const gapSize = `${styleVariables.gap} * ${newCount - 0.235}`;
		const childrenSize = `${childrenWidth}px * ${newCount}`;
		const translateEnd = `calc(((${gapSize}) + (${childrenSize})) * -1)`;
		newWrapperStyle.push(`--translate-end: ${translateEnd}`);

		setWrapperStyle(newWrapperStyle);
	});

	const wrapperStyleComputed = createMemo(() => wrapperStyle().join(";"));

	return (
		<div ref={container} class={styles.container}>
			<div
				ref={wrapper}
				class={`${styles.wrapper} row`}
				style={wrapperStyleComputed()}
			>
				<For each={childList()}>{(item) => item}</For>
			</div>
		</div>
	);
};

export default Marquee;
