import {axiosR} from "axios-r";

const getNote = (id) => {
	return axiosR("note", "get").get(`/notes/${id}`);
};

export {getNote};
