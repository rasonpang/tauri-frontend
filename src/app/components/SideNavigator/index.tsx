import styles from "./style.module.css";
import { NavigateItem } from "@/data/interfaces/elements";

interface Props {
	list: NavigateItem[];
}

const SideNavigator = (props: Props) => {
	const redirect = (navigate: NavigateItem) => {
		const target: any = navigate.target;
		target?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div class={styles.container}>
			{props.list.map((item: NavigateItem) => {
				return (
					<abbr
						class={styles.navigate_btn}
						onClick={() => {
							redirect(item);
						}}
						title={item.name}
					></abbr>
				);
			})}
		</div>
	);
};

export default SideNavigator;
