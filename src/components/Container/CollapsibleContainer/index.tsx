import { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";

interface Props {
	classes?: any;
	title_class?: string;
	content_class?: string;

	title: string;

	children: any;
}

const CollapsibleContainer = (props: Props) => {
	let content: any;
	let contentMaxHeight: any;

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		setVisible(!visible);
	};

	useEffect(() => {
		contentMaxHeight = content.scrollHeight;
	}, []);

	return (
		<div
			className={`${styles.container} ${
				props?.classes?.class ?? ""
			}`}
		>
			<span
				className={`${styles.title} ${
					props?.classes?.title_class ?? ""
				} center-y`}
				onClick={() => {
					toggleVisible();
				}}
			>
				{props.title}
			</span>
			<div
				ref={content}
				className={`${styles.content} ${
					props?.classes?.content_class ?? ""
				}`}
				style={{
					maxHeight: visible
						? contentMaxHeight
						: 0,
				}}
			>
				<div className={styles.content_wrapper}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default CollapsibleContainer;
