import ICEPageLoad from "@components/load/ICEPageLoad";
import { NotFound } from "@components/NotFound";
import App from "@views/App";
import { createBrowserHistory } from "history";
import { parse } from "qs";
import React from "react";
import Loadable from "react-loadable";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { Paths, RoutePaths } from './const';

const history = createBrowserHistory();

const addLocationQuery = (nextHistory) => {
	nextHistory.location = {
		...nextHistory.location,
		query: parse(nextHistory.location.search.substr(1)),
	};
};

addLocationQuery(history);

history.listen(() => addLocationQuery(history));

const Index = Loadable({
	loader: () => (import("@views/Index")),
	loading: ICEPageLoad,
});

const AppRouter = () => (
	<Router history={history}>
		<App>
			<Switch>
				<Route exact={true} path={RoutePaths[Paths.INDEX]} component={Index}/>
				<Redirect exact={true} from={"/"} to={RoutePaths[Paths.INDEX]}/>
				<Route path={"*"} component={NotFound}/>
			</Switch>
		</App>
	</Router>
);

export default AppRouter;