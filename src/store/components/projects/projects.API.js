import {axiosR} from "axios-r";
import _keys from "lodash/keys";
import _pick from "lodash/pick";

import {requestModel} from "./projects.model";

const modelFn = (item) => _pick(item, _keys(requestModel));

// Reducer and Action Name
const reducer = "projects";

const getProjects = (params = null, update) => {
	const action = update ? "getUpdate" : "get";
	return axiosR(reducer, action).get("/projects", {params}, true);
};

const postProject = (data) => {
	return axiosR(reducer, "post").post("/projects", modelFn(data));
};

const putProject = (data) => {
	return axiosR(reducer, "put").put(`/projects/${data.id}`, modelFn(data));
};

const deleteProject = (data) => {
	return axiosR(reducer, "delete").delete(`/projects/${data.id}`);
};

// Only API Call
const searchProjects = (params = null) => axiosR().get("/projects", {params});

export {getProjects, postProject, putProject, deleteProject, searchProjects};
