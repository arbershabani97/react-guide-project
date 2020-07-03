/* eslint-disable no-prototype-builtins */
/* eslint-disable default-case */
import Actions from "../components/Actions";

// eslint-disable-next-line max-statements
const dispatcher = (status, data) => {
	const {method} = data.config;
	const {reducer, requestId, update} = data.config ? data.config.headers : {};

	const instance = Actions[reducer];
	if (!instance) return;

	const payloadData = data.config.data || null;
	let payload = status === "success" || status === "error" ? JSON.parse(payloadData) : payloadData;

	switch (method) {
		case "get":
			if (status === "success") {
				if (reducer.endsWith("s")) {
					const getMethod = update ? "getUpdate" : "get";
					instance[getMethod]({payload: {data: data.data, meta: {currentPage: 1}}, status, etag: ""});
				} else {
					instance.get(data.data);
				}
			}
			break;

		case "post":
			if (status === "success") payload = data.data;
			if (data.config.data) instance[method]({payload, status, requestId});
			break;

		case "put":
			const singleInstance = Actions[reducer.slice(0, -1)];

			if (status === "success" && singleInstance) singleInstance.get(payload);
			if (payload) instance[method]({payload, status, requestId});
			break;

		case "delete":
			instance[method]({payload: {id: Number(data.config.url.split("/").slice(-1)[0])}, status, requestId});
			break;

		default:
	}

	/*
	 * if (data.data) {
	 * 	data.data.requestId = requestId;
	 * 	data.data.success = true;
	 * 	// Add Id, when it is a delete request or getSingle
	 * 	if (method === "delete" || !reducer.endsWith("s")) data.data.id = Number(data.config.url.split("/").slice(-1)[0]);
	 * 	update ? instance.getUpdate(data.data) : instance[method](data.data);
	 * }
	 */
	// break;
};
export default dispatcher;
