import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import history from "./history";
import Projects from "./components/projects/Projects";
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Projects} />
				</Switch>
			</Router>
		</div>
	);
};
export default App;
