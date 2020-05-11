import axios from "./axios";

const axiosWrapper = (reducer, requestId) => {
	const instance = axios.create();
	instance.defaults.headers.requestId = requestId;
	instance.defaults.headers.reducer = reducer;
	instance.interceptors.request = axios.interceptors.request;
	instance.interceptors.response = axios.interceptors.response;
	return instance;
};

const axiosReq = async (reducer, requestId, type, url, data = null, params = null, headers = null) => {
	try {
		if (type === "get") return await axiosWrapper(reducer, requestId)[type](url, {params});
		if (type === "post") return await axiosWrapper(reducer, requestId)[type](url, data, headers);
		if (type === "put") return await axiosWrapper(reducer, requestId)[type](url, data, headers);
		if (type === "delete") return await axiosWrapper(reducer, requestId)[type](url);
	} catch (error) {
		return Promise.reject(error);
	}
};

export default axiosReq;
