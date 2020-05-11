import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root"),
);

/*
 * import * as serviceWorker from './serviceWorker';
 *
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: http://bit.ly/CRA-PWA
 * serviceWorker.unregister();
 */
