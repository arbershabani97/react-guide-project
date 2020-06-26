import axios from "./axios";

const axiosWrapper = (reducer, requestId, update) => {
	const instance = axios.create();
	if (requestId) instance.defaults.headers.requestId = requestId;
	if (reducer) instance.defaults.headers.reducer = reducer;
	if (update) instance.defaults.headers.update = update;
	instance.interceptors.request = axios.interceptors.request;
	instance.interceptors.response = axios.interceptors.response;
	return instance;
};

// eslint-disable-next-line max-params, consistent-return
const axiosReq = async (reducer, requestId, type, url, data = null, params = null, headers = null, update) => {
	try {
		if (type === "get") return await axiosWrapper(reducer, requestId, update)[type](url, {params});
		if (type === "post") return await axiosWrapper(reducer, requestId)[type](url, data, headers);
		if (type === "put") return await axiosWrapper(reducer, requestId)[type](url, data, headers);
		if (type === "delete") return await axiosWrapper(reducer, requestId)[type](url);
	} catch (error) {
		return Promise.reject(error);
	}
};

export default axiosReq;
