import axiosReq from "../../axios/axiosRequest";
import generateId from "../../axios/generateId";

let requestId = 1;

const getNote = (id) => axiosReq("note", generateId(requestId++), "get", `/notes/${id}`);

export {getNote};
