import axios from "axios";
import {axiosRInit, dispatcher} from "axios-r";

import {store} from ".";
import Actions from "./components/Actions";

// Set Axios Defaults
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.baseURL = "";

axios.interceptors.request.use((config) => {
	dispatcher("request", {config});
	return config;
});

axios.interceptors.response.use(
	(data) => {
		dispatcher("success", data);
		return data;
	},
	(error) => {
		dispatcher("error", error);
		return Promise.reject(error);
	},
);
axiosRInit(axios, store, Actions);
