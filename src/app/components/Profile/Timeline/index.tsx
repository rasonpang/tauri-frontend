import { For, onMount } from "solid-js";

import styles from "./style.module.css";
import me from "@/data/constants/me.json";

import CollapsibleContainer from "../../Container/CollapsibleContainer";
import Work from "./Work";

interface Props {
	setNavList: any;
}

const Timeline = (props: Props) => {
	let container: any;

	onMount(() => {
		props.setNavList((prev: any) => [
			...prev,
			{ name: "Work Experience", target: container },
		]);
	});

	const getWorkingData = () => {
		const skillList: any = me.skill.hard;
		const projectList: any = me.projects;

		return me.working.map((i) => {
			// Skills
			const newSkills: any = i.skills.map((skill: any) => {
				return skillList[skill]
					? skillList[skill]
					: skill;
			});
			i.skills = newSkills;

			// Projects
			const newProjects: any = i.projects.map(
				(project: any) => {
					return projectList[project]
						? projectList[project]
						: project;
				}
			);
			i.projects = newProjects;

			return i;
		});
	};

	const workingData = getWorkingData();

	// Set value here
	let classList: any = [
		{
			class: styles.company_0,
			title_class: `${styles.company_title_0} ${styles.company_title}`,
			content_class: styles.company_content_0,
		},
		{
			class: styles.company_1,
			title_class: `${styles.company_title_1} ${styles.company_title}`,
			content_class: styles.company_content_1,
		},
		{
			class: styles.company_2,
			title_class: `${styles.company_title_2} ${styles.company_title}`,
			content_class: styles.company_content_2,
		},
		{
			class: styles.company_3,
			title_class: `${styles.company_title_3} ${styles.company_title}`,
			content_class: styles.company_content_3,
		},
	];

	return (
		<div ref={container} class={styles.container}>
			<div class="title">Work Experience</div>

			<div class={styles.experiences}>
				<For each={workingData}>
					{(work, index) => (
						<CollapsibleContainer
							title={work.companyName}
							classes={
								classList[
									index()
								]
							}
						>
							<Work work={work} />
						</CollapsibleContainer>
					)}
				</For>
			</div>
		</div>
	);
};

export default Timeline;
