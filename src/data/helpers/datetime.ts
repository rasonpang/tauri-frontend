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

export function getDateDifference(timestamp1: number, timestamp2: number) {
	// Convert timestamps to Date objects
	const date1 = new Date(timestamp1);
	const date2 = new Date(timestamp2);

	// Calculate the difference in years and months
	let years = date2.getFullYear() - date1.getFullYear();
	let months = date2.getMonth() - date1.getMonth();

	// Adjust if the month difference is negative
	if (months < 0) {
		years--;
		months += 12;
	}

	// Construct the result string
	const yearsString =
		years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
	const monthsString =
		months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

	// Combine the results with appropriate spacing
	return [yearsString, monthsString].filter(Boolean).join(" and ");
}
