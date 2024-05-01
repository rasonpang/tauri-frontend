/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// Global CSS
import "./index.css";

// Layout
import BarLayout from "@/app/layouts/BarLayout";

// Routes configuration
const routes = [
	{ path: "/", component: lazy(() => import("@/app/routes/index")) },
];

render(
	() => (
		<Router root={BarLayout}>
			{routes.map(({ path, component }) => (
				<Route path={path} component={component} />
			))}
		</Router>
	),
	document.getElementById("root") as HTMLElement
);
