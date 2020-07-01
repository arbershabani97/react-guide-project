import _keys from "lodash/keys";
import _pick from "lodash/pick";

import axiosReq from "../../axios/axiosRequest";
import generateId from "../../axios/generateId";
import {requestModel} from "./notes.model";

let requestId = 1;
const modelFn = (item) => _pick(item, _keys(requestModel));

// Reducer & requestId
const requestData = () => ["notes", generateId(requestId++)];

// Save Data in Redux
const getNotes = (params = null, update) => axiosReq(...requestData(), "get", "/posts", null, params, null, update);
const postNote = (data) => axiosReq(...requestData(), "post", "/posts", modelFn(data));
const putNote = (data) => axiosReq(...requestData(), "put", `/posts/${data.id}`, modelFn(data));
const deleteNote = (data) => axiosReq(...requestData(), "delete", `/posts/${data.id}`);

// Only API Call
const searchNotes = (params = null) => axiosReq("", "", "get", "/posts", null, params);

export {getNotes, postNote, putNote, deleteNote, searchNotes};
