import Header from "@/app/components/Header";
import styles from "./style.module.css";

const AeonLayout = (props: any) => {
	return (
		<div class={styles.page}>
			<Header class={`${styles.header} center`}>
				<a href="/aeon-credit">
					<span class={styles.wrapper}>
						<div>
							<img
								src="https://www.mfa.org.my/wp-content/uploads/2020/01/AEON-Logo-1.png"
								width="30px"
								height="30px"
							/>
						</div>
						<div
							class={`${styles.company_name} center`}
						>
							ÆON CREDIT SERVICE
						</div>
					</span>
				</a>
			</Header>
			{props.children}
		</div>
	);
	return;
};

export default AeonLayout;
