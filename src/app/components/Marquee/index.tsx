import { createMemo, createSignal, For, JSX, onMount } from "solid-js";
import styles from "./style.module.css";

interface Props {
	boxShadowColor?: string;
	children: JSX.Element;
}

const Marquee = (props: Props) => {
	let container: any;
	let wrapper: any;

	const styleVariables = {
		gap: "1rem",
		boxShadowColor: "rgba(255, 255, 255, 0.3)",
	};

	const [childList, setChildList] = createSignal([
		<div>{props.children}</div>,
	]);
	const [styleVars, setStyleVars] = createSignal([
		`--gap: ${styleVariables.gap}`,
		`--box-shadox-color: ${styleVariables.boxShadowColor}`,
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

		const newStyleVars = [
			`--gap: ${styleVariables.gap}`,
			`--box-shadox-color: ${
				props.boxShadowColor ??
				styleVariables.boxShadowColor
			}`,
		];

		// Calculate Translate End
		const gapSize = `${styleVariables.gap} * ${newCount - 0.235}`;
		const childrenSize = `${childrenWidth}px * ${newCount}`;
		const translateEnd = `calc(((${gapSize}) + (${childrenSize})) * -1)`;
		newStyleVars.push(`--translate-end: ${translateEnd}`);

		setStyleVars(newStyleVars);
	});

	const styleVarsComputed = createMemo(() => styleVars().join(";"));

	return (
		<div
			ref={container}
			class={styles.container}
			style={styleVarsComputed()}
		>
			<div ref={wrapper} class={`${styles.wrapper} row`}>
				<For each={childList()}>{(item) => item}</For>
			</div>
		</div>
	);
};

export default Marquee;
