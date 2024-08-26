import { getDate, getDateDifference } from "@/data/helpers/datetime";
import styles from "./style.module.css";
import Background from "@/components/Background";
import React from "react";

const Work = (props: any) => {
	const workingTime = `${getDate(props.work.time.from)} ~ ${getDate(
		props.work.time.to
	)} (${getDateDifference(props.work.time.from, props.work.time.to)})`;

	return (
		<div className={styles.working_wrapper}>
			{/* Role */}
			<div className={styles.working_role}>
				{props.work.role}
			</div>

			{/* Time */}
			<div className={styles.working_time}>{workingTime}</div>

			{/* Skills */}
			<div>
				<div>Skills used:</div>
				<span className={styles.working_skill_wrapper}>
					{props.work.skills.map(
						(skill: any, key: any) =>
							typeof skill ==
							"string" ? (
								<span
									className={
										styles.working_skill
									}
									key={
										key
									}
								>
									{skill}
								</span>
							) : (
								<span
									className={`${styles.working_skill} center`}
									key={
										key
									}
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
					)}
				</span>
			</div>

			{/* Projects */}
			<div>
				<div>Projects involved:</div>
				<span className={styles.projects_wrapper}>
					{props.work.projects.length > 0 ? (
						props.work.projects.map(
							(
								project: any,
								key: any
							) => {
								return (
									<a
										className={`center ${styles.project}`}
										href={
											project.url
										}
										target="_blank"
										key={
											key
										}
									>
										<Background
											class={
												styles.project_bg
											}
											style={{
												position: "absolute",
												backgroundImage: `url("${project.thumbnail}")`,
											}}
										></Background>

										<div
											className={
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
											className={
												styles.click_to_enter
											}
										>
											Click
											to
											enter
										</div>
									</a>
								);
							}
						)
					) : (
						<span
							className={"center"}
							style={{
								gap: "0.5rem",
							}}
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
