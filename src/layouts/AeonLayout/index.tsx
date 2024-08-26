import Header from "@/components/Header";
import styles from "./style.module.css";

const AeonLayout = (props: any) => {
	return (
		<div className={styles.page}>
			<Header className={`${styles.header} center`}>
				<a href="/aeon-credit">
					<span className={styles.wrapper}>
						<div>
							<img
								src="https://www.mfa.org.my/wp-content/uploads/2020/01/AEON-Logo-1.png"
								width="30px"
								height="30px"
							/>
						</div>
						<div
							className={`${styles.company_name} center`}
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
