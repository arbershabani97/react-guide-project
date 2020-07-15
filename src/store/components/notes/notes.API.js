import {axiosR} from "axios-r";
import _keys from "lodash/keys";
import _pick from "lodash/pick";

import {requestModel} from "./notes.model";

const modelFn = (item) => _pick(item, _keys(requestModel));

// Reducer and Action Name
const reducer = "notes";

// Save Data in Redux
const getNotes = (params = null, update) => {
	const action = update ? "getUpdate" : "get";
	return axiosR(reducer, action).get("/notes", {params}, true);
};
const postNote = (data) => {
	return axiosR(reducer, "post").post("/notes", modelFn(data));
};

const putNote = (data) => {
	return axiosR(reducer, "put").put(`/notes/${data.id}`, modelFn(data));
};

const deleteNote = (data) => {
	return axiosR(reducer, "delete").delete(`/notes/${data.id}`);
};

// Only API Call
const searchNotes = (params = null) => axiosR().get("/notes", {params});

export {getNotes, postNote, putNote, deleteNote, searchNotes};
