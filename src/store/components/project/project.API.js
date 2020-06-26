import axiosReq from "../../axios/axiosRequest";
import generateId from "../../axios/generateId";

let requestId = 1;

const getProject = (id) => axiosReq("project", generateId(requestId++), "get", `/posts/${id}`);

export {getProject};
