import { For } from "solid-js";

import { getDate, getDateDifference } from "@/data/helpers/datetime";
import styles from "./style.module.css";
import Background from "@/app/components/Background";

const Work = (props: any) => {
	const workingTime = `${getDate(props.work.time.from)} ~ ${getDate(
		props.work.time.to
	)} (${getDateDifference(props.work.time.from, props.work.time.to)})`;

	return (
		<div class={styles.working_wrapper}>
			{/* Role */}
			<div class={styles.working_role}>{props.work.role}</div>

			{/* Time */}
			<div class={styles.working_time}>{workingTime}</div>

			{/* Skills */}
			<div>
				<div>Skills used:</div>
				<span class={styles.working_skill_wrapper}>
					<For each={props.work.skills}>
						{(skill: any) =>
							typeof skill ==
							"string" ? (
								<span
									class={
										styles.working_skill
									}
								>
									{skill}
								</span>
							) : (
								<span
									class={`${styles.working_skill} center`}
								>
									<img
										src={
											skill.logo
										}
										height="100%"
									/>
									<div>
										{
											skill.name
										}
									</div>
								</span>
							)
						}
					</For>
				</span>
			</div>

			{/* Projects */}
			<div>
				<div>Projects involved:</div>
				<span class={styles.projects_wrapper}>
					{props.work.projects.length > 0 ? (
						<For each={props.work.projects}>
							{(project: any) => {
								return (
									<a
										class={`center ${styles.project}`}
										href={
											project.url
										}
										target="_blank"
									>
										<Background
											class={
												styles.project_bg
											}
											style={`position: absolute; background-image: url("${project.thumbnail}")`}
										></Background>

										<div
											class={
												styles.project_name
											}
										>
											{
												project.name
											}
										</div>
										<div>
											{
												project.description
											}
										</div>
										<div
											class={
												styles.click_to_enter
											}
										>
											Click
											to
											enter
										</div>
									</a>
								);
							}}
						</For>
					) : (
						<span
							class={"center"}
							style={"gap: .5rem"}
						>
							<img
								src="shapes/warning.svg"
								width={25}
								height={25}
							></img>
							No project was able to
							be mentioned...
						</span>
					)}
				</span>
			</div>
		</div>
	);
};

export default Work;
