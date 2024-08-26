import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

interface Props {
	boxShadowColor?: string;
	children: JSX.Element;
}

const Marquee = (props: Props) => {
	let container: any = useRef(null);
	let wrapper: any = useRef(null);

	const styleVariables = {
		gap: "1rem",
		boxShadowColor: "rgba(255, 255, 255, 0.3)",
	};

	const [childList, setChildList] = useState([
		<div>{props.children}</div>,
	]);
	const [styleVars, setStyleVars] = useState({
		"--gap": styleVariables.gap,
		"--box-shadox-color": styleVariables.boxShadowColor,
		"--translate-end": "-100%",
	});

	useEffect(() => {
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

		let newStyleVars: any = {
			"--gap": styleVariables.gap,
			"--box-shadox-color":
				props.boxShadowColor ??
				styleVariables.boxShadowColor,
		};

		// Calculate Translate End
		const gapSize = `${styleVariables.gap} * ${newCount - 0.235}`;
		const childrenSize = `${childrenWidth}px * ${newCount}`;
		const translateEnd = `calc(((${gapSize}) + (${childrenSize})) * -1)`;
		newStyleVars["--translate-end"] = translateEnd;

		setStyleVars(newStyleVars);
	}, []);

	const styleVarsComputed = styleVars as React.CSSProperties;

	return (
		<div
			ref={container}
			className={styles.container}
			style={styleVarsComputed}
		>
			<div ref={wrapper} className={`${styles.wrapper} row`}>
				{childList.map((item, key) => (
					<div key={key}>{item}</div>
				))}
			</div>
		</div>
	);
};

export default Marquee;
