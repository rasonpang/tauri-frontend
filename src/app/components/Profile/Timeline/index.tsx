import styles from "./style.module.css";

const Timeline = () => {
	const experiences = [
		{
			id: 1,
			title: "Software Engineer",
			company: "ABC Corporation",
			dates: "2018-2020",
			description:
				"Worked on multiple projects, including a web application and a mobile app.",
		},
		{
			id: 2,
			title: "Junior Developer",
			company: " DEF Startups",
			dates: "2015-2018",
			description:
				" Contributed to the development of a e-commerce platform.",
		},
		{
			id: 3,
			title: "Intern",
			company: "GHI Agency",
			dates: "Summer 2014",
			description:
				"Assisted in the development of a marketing website.",
		},
	];

	return (
		<div class={styles.timeline}>
			{experiences.map((experience) => (
				<div class={styles.timeline_item}>
					<div class={styles.timeline_date}>
						{experience.dates}
					</div>
					<div class={styles.timeline_content}>
						<h3>{experience.title}</h3>
						<p>{experience.company}</p>
						<p>{experience.description}</p>
					</div>
					<div class={styles.enter_since}>
						<p>Enter Since</p>
						<span>
							{
								experience.dates.split(
									"-"
								)[0]
							}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Timeline;
