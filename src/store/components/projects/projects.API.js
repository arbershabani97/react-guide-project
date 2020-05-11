import axiosReq from "../../axios/axiosRequest";
import generateId from "../../axios/generateId";
import {requestModel} from "./projects.model";
import _pick from "lodash/pick";
import _keys from "lodash/keys";

let requestId = 1;
const modelFn = (item) => _pick(item, _keys(requestModel));
// Reducer & requestId
const requestData = () => ["projects", generateId(requestId++)];

const getProjects = (params = null) => axiosReq(...requestData(), "get", "/posts", null, params);
const postProject = (data) => axiosReq(...requestData(), "post", "/posts", modelFn(data));
const putProject = (data) => axiosReq(...requestData(), "put", "/posts/" + data.id, modelFn(data));
const deleteProject = (data) => axiosReq(...requestData(), "delete", "/posts/" + data.id);

export {getProjects, postProject, putProject, deleteProject};
