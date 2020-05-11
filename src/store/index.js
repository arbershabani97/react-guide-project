import {createStore, applyMiddleware, compose} from "redux";

import reduxThunk from "redux-thunk";
import reducers from "./components/Reducers";

export default createStore(reducers, compose(applyMiddleware(reduxThunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f));
