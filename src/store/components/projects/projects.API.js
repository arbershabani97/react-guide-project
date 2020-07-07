import _keys from "lodash/keys";
import _pick from "lodash/pick";

import axiosReq from "../../axios/axiosRequest";
import generateId from "../../axios/generateId";
import {requestModel} from "./projects.model";

let requestId = 1;
const modelFn = (item) => _pick(item, _keys(requestModel));

// Reducer & requestId
const requestData = () => ["projects", generateId(requestId++)];

// Save Data in Redux
const getProjects = (params = null, update) => axiosReq(...requestData(), "get", "/projects", null, params, null, update);
const postProject = (data) => axiosReq(...requestData(), "post", "/projects", modelFn(data));
const putProject = (data) => axiosReq(...requestData(), "put", `/projects/${data.id}`, modelFn(data));
const deleteProject = (data) => axiosReq(...requestData(), "delete", `/projects/${data.id}`);

// Only API Call
const searchProjects = (params = null) => axiosReq("", "", "get", "/projects", null, params);

export {getProjects, postProject, putProject, deleteProject, searchProjects};
