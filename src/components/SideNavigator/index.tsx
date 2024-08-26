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
		<div className={styles.container}>
			{props.list.map((item: NavigateItem, key: any) => {
				return (
					<div
						className={styles.navigate_btn}
						onClick={() => {
							redirect(item);
						}}
						key={key}
					>
						<div
							className={
								styles.navigate_btn_name
							}
						>
							{item.name}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SideNavigator;
