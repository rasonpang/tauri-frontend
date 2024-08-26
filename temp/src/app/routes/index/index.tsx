import SkewDisplay from "@/components/SkewDisplay";
import styles from "./style.module.css";

const HomePage = () => {
	return (
		<div>
			<section className={styles.main}>
				<div>4</div>
				<div>6 (Wallpaper)</div>
			</section>

			<section>
				<SkewDisplay color={"red"}>
					<div>a</div>
					<div>b</div>
					<div>c</div>
				</SkewDisplay>
			</section>

			<section>
				<div>🌸</div>
			</section>
		</div>
	);
};

export default HomePage;
