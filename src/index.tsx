/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import BarLayout from "@/app/layouts/BarLayout";
import HomePage from "@/app/routes";

render(
	() => (
		<Router root={BarLayout}>
			<Route path="/" component={HomePage} />
		</Router>
	),
	document.getElementById("root") as HTMLElement
);
