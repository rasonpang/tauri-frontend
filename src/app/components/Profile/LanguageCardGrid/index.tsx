import styles from "./style.module.css";

const LanguageCard = (props: {
	language: { name: string; logo: string; description: string };
}) => {
	return (
		<div class={styles.card}>
			<div class="center">
				<img
					src={props.language.logo}
					alt={props.language.name}
					class={styles.logo}
				/>
			</div>
			<h3>{props.language.name}</h3>
			<p>{props.language.description}</p>
		</div>
	);
};

const LanguageCardGrid = (props: {
	languages: { name: string; logo: string; description: string }[];
}) => {
	let startX: any;
	let scrollLeft: any;
	let isDown = false;

	const startDragging = (e: any) => {
		isDown = true;
		startX = e.pageX - e.currentTarget.offsetLeft;
		scrollLeft = e.currentTarget.scrollLeft;
	};

	const stopDragging = () => {
		isDown = false;
	};

	const handleMouseMove = (e: any) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - e.currentTarget.offsetLeft;
		const walk = x - startX;
		e.currentTarget.scrollLeft = scrollLeft - walk;
	};

	return (
		<div
			class={`${styles.container} row`}
			onMouseDown={startDragging}
			onMouseLeave={stopDragging}
			onMouseUp={stopDragging}
			onMouseMove={handleMouseMove}
		>
			<div class={`${styles.wrapper} row`}>
				{props.languages.map((language) => (
					<LanguageCard language={language} />
				))}
			</div>
		</div>
	);
};

export default LanguageCardGrid;
