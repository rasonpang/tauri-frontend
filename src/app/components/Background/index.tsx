const Background = (props: any) => {
	const styles: any = {
		container: {
			position: "absolute",
			width: "100%",
			height: "100%",
			"z-index": -999,
			overflow: "hidden",
		},
	};
	return <div style={styles.container}>{props.children}</div>;
};

export default Background;
