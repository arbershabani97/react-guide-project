import {axiosR} from "axios-r";

const getProject = (id) => {
	return axiosR("project", "get").get(`/projects/${id}`);
};

export {getProject};
