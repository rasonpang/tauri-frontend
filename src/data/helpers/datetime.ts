export const getDate = (value?: any, format?: string) => {
	let dt;
	if (!value) dt = new Date();
	else dt = new Date(value);
	if (!format) format = "DD MMMM YYYY";
	return dt.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
	});
};
