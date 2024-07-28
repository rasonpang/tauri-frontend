import { createSignal, JSX, onMount } from "solid-js";
import styles from "./style.module.css";

interface Props {
	class?: any;
	style?: any;
	children?: JSX.Element;
	maxScrollVH?: number;
}

const Background = (props: Props) => {
	let container: any;
	const [top, setTop] = createSignal(0);

	onMount(() => {
		if (typeof props.maxScrollVH === "number") {
			let maxScrollVh: number = props.maxScrollVH;

			window.addEventListener("scroll", () => {
				const vhScrolled = Math.floor(
					(window.scrollY / window.innerHeight) *
						100
				);

				if (vhScrolled > maxScrollVh) {
					setTop(-100);
				} else {
					setTop(0);
				}
			});
		}
	});

	return (
		<div
			ref={container}
			class={`${styles.container} ${props.class ?? ""}`}
			style={[props.style, `top: ${top()}vh;`].join(";")}
		>
			{props.children}
		</div>
	);
};

export default Background;
