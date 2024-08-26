/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// Global CSS
import "./app/assets/css/global.css";
import "./app/assets/css/custom.css";
import "./app/assets/css/animation.css";

// Layout
import BlankLayout from "@/layouts/BlankLayout";
import AeonLayout from "@/layouts/AeonLayout";
// import PagingLayout from "@/layouts/PagingLayout";
// import BarLayout from "@/layouts/BarLayout";

// Routes configuration
const routes = [
	{
		path: "/",
		component: lazy(() => import("@/routes/resume/index")),
	},
];

const aeonRoutes = [
	{
		path: "/",
		component: lazy(() => import("@/routes/aeon-credit/index")),
	},
	{
		path: "/application",
		component: lazy(
			() => import("@/routes/aeon-credit/application")
		),
	},
	{
		path: "/loan-detail",
		component: lazy(
			() => import("@/routes/aeon-credit/loan-calculator")
		),
	},
];

render(
	() => (
		<Router>
			{/* Bar Layout */}
			<Route path="/" component={BlankLayout}>
				{routes.map(({ path, component }) => (
					<Route
						path={path}
						component={component}
					/>
				))}
			</Route>

			<Route path="/aeon-credit" component={AeonLayout}>
				{aeonRoutes.map(({ path, component }) => (
					<Route
						path={path}
						component={component}
					/>
				))}
			</Route>

			{/* Paging Layout */}
			{/* <Route path="/sign-in" component={PagingLayout}>
				<Route
					path="/"
					component={lazy(
						() =>
							import(
								"@/routes/sign-in"
							)
					)}
				></Route>
			</Route> */}
		</Router>
	),
	document.getElementById("root") as HTMLElement
);
