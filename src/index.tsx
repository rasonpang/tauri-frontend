/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// Global CSS
import "./index.css";

// Layout
import BarLayout from "@/app/layouts/BarLayout";
import PagingLayout from "./app/layouts/PagingLayout";

// Routes configuration
const routes = [
	{ path: "/", component: lazy(() => import("@/app/routes/index")) },
];

render(
	() => (
		<Router>
			{/* Bar Layout */}
			<Route path="/" component={BarLayout}>
				{routes.map(({ path, component }) => (
					<Route path={path} component={component} />
				))}
			</Route>

			{/* Paging Layout */}
			<Route path="/sign-in" component={PagingLayout}>
				<Route
					path="/"
					component={lazy(() => import("@/app/routes/sign-in"))}
				></Route>
			</Route>
		</Router>
	),
	document.getElementById("root") as HTMLElement
);
