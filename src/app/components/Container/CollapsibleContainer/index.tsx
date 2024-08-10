import { createMemo, createSignal, onMount } from "solid-js";
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

	const [visible, setVisible] = createSignal(false);

	const toggleVisible = () => {
		setVisible(!visible());
	};

	onMount(() => {
		contentMaxHeight = content.scrollHeight;
	});

	const contentStyle = createMemo(
		() => `max-height: ${visible() ? contentMaxHeight : 0}px`
	);

	return (
		<div
			class={`${styles.container} ${
				props?.classes?.class ?? ""
			}`}
		>
			<span
				class={`${styles.title} ${
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
				class={`${styles.content} ${
					props?.classes?.content_class ?? ""
				}`}
				style={contentStyle()}
			>
				<div class={styles.content_wrapper}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default CollapsibleContainer;
