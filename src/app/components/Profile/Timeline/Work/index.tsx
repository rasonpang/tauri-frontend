import { For } from "solid-js";

import { getDate, getDateDifference } from "@/data/helpers/datetime";
import styles from "./style.module.css";

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
		</div>
	);
};

export default Work;
