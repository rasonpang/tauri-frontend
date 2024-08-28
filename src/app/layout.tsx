import "@/styles/global.css";
import "@/styles/custom.css";

const RootLayout = ({ children }: any) => {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
