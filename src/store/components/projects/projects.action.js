import store from "../..";
import {DELETE_PROJECT, GET_PROJECTS, GET_UPDATE_PROJECTS, POST_PROJECT, PROJECTS_ERROR, PUT_PROJECT} from "../../actionTypes";

const {dispatch} = store;

export default {
	get: (data) => dispatch({type: GET_PROJECTS, ...data}),
	post: (data) => dispatch({type: POST_PROJECT, ...data}),
	put: (data) => dispatch({type: PUT_PROJECT, ...data}),
	delete: (data) => dispatch({type: DELETE_PROJECT, ...data}),
	error: (data) => dispatch({type: PROJECTS_ERROR, ...data}),
	getUpdate: (data) => dispatch({type: GET_UPDATE_PROJECTS, ...data}),
};
