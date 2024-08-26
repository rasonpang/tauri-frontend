import { useEffect } from "react";
import styles from "./style.module.css";

interface Props {
	children: any;
	fields: any[];
	onSubmit: Function;
}

const Form = (props: Props) => {
	let form: any;

	const onSubmit = (event: any) => {
		event.preventDefault();

		// 1. Get values
		const values: any = getFieldValues();

		// 2. Validate values by field validation

		props.onSubmit(values);
	};

	const getFieldValues = () => {
		return props.fields.reduce((prev, curr) => {
			const field = form.querySelector(`[name=${curr.name}]`);

			if (field) {
				const fieldValue = field.value;
				prev[curr.name] = fieldValue;
			}

			return prev;
		}, {});
	};

	useEffect(() => {
		props.fields.map((field) => {
			const fieldElement = form.querySelector(
				`[name=${field.name}]`
			);

			if (fieldElement) {
				const errorMessage =
					document.createElement("div");
				errorMessage.className = styles.error_message;
				fieldElement.parentElement.appendChild(
					errorMessage
				);
			}
		});
	}, []);

	const validate = () => {};

	return (
		<form ref={form} onSubmit={onSubmit}>
			{props.children}
		</form>
	);
};

export default Form;
