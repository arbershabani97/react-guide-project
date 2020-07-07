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
const getNotes = (params = null, update) => axiosReq(...requestData(), "get", "/notes", null, params, null, update);
const postNote = (data) => axiosReq(...requestData(), "post", "/notes", modelFn(data));
const putNote = (data) => axiosReq(...requestData(), "put", `/notes/${data.id}`, modelFn(data));
const deleteNote = (data) => axiosReq(...requestData(), "delete", `/notes/${data.id}`);

// Only API Call
const searchNotes = (params = null) => axiosReq("", "", "get", "/notes", null, params);

export {getNotes, postNote, putNote, deleteNote, searchNotes};
