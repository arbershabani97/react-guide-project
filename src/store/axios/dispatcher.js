/* eslint-disable no-prototype-builtins */
/* eslint-disable default-case */
import Actions from "../components/Actions";

// eslint-disable-next-line max-statements
const dispatcher = (type, data) => {
	const {method} = data.config;
	const {reducer, requestId, update} = data.config ? data.config.headers : {};

	const instance = Actions[reducer];
	if (!instance) return;

	switch (type) {
		case "request":
			if (data.config.data) {
				instance[method]({...data.config.data, requestId});
			}
			if (method === "delete") {
				instance[method]({
					requestId,
					id: +data.config.url.split("/").slice(-1)[0],
					deleted: true,
				});
			}
			break;

		case "success":
			if (data.data) {
				data.data.requestId = requestId;
				data.data.success = true;
				// Add Id, when it is a delete request or getSingle
				if (method === "delete" || !reducer.endsWith("s")) data.data.id = +data.config.url.split("/").slice(-1)[0];
				update ? instance["getUpdate"](data.data) : instance[method](data.data);
			}
			break;

		case "error":
			if (data.config.method !== "get") instance["error"]({requestId});
			break;
	}
};
export default dispatcher;
