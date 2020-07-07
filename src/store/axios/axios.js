import axios from "axios";

import {objectKeysToCamelCase, objectKeysToSnakeCase} from "./camelCase";
import dispatcher from "./dispatcher";

// Set Axios Defaults
axios.defaults.headers.post["Content-Type"] = "application/json";
/*
 * axios.defaults.baseURL = "";
 * axios.defaults.headers.Authorization = "";
 */

axios.interceptors.request.use((config) => {
	dispatcher("request", {config});

	config.params = objectKeysToSnakeCase(config.params);
	if (config.headers["Content-Type"] !== "multipart/form-data") {
		config.data = objectKeysToSnakeCase(config.data);
	}
	return config;
});

axios.interceptors.response.use(
	(data) => {
		data.data = objectKeysToCamelCase(data.data);
		dispatcher("success", data);

		return data;
	},
	(error) => {
		dispatcher("error", error);

		return Promise.reject(error);
	},
);

export default axios;
