import styles from "./style.module.css";
import { useEffect, useState } from "react";

interface Props {
	class?: any;
	style?: any;
	children?: JSX.Element;
	maxScrollVH?: number;
}

const Background = (props: Props) => {
	let container: any;
	const [top, setTop] = useState(0);

	useEffect(() => {
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
	}, []);

	return (
		<div
			ref={container}
			className={`${styles.container} ${props.class ?? ""}`}
			style={{
				...{ top: `${top}vh` },
				...props.style,
			}}
		>
			{props.children}
		</div>
	);
};

export default Background;
