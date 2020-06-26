import axios from "axios";

import dispatcher from "./dispatcher";

// Set Axios Defaults
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

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

export default axios;
