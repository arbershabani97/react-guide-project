import store from "../..";
import {DELETE_PROJECT, GET_PROJECTS, GET_UPDATE_PROJECTS, POST_PROJECT, PROJECTS_ERROR, PUT_PROJECT} from "../../actionTypes";

const {dispatch} = store;

export default {
	get: (data) => dispatch({type: GET_PROJECTS, payload: data}),
	post: (data) => dispatch({type: POST_PROJECT, payload: data}),
	put: (data) => dispatch({type: PUT_PROJECT, payload: data}),
	delete: (data) => dispatch({type: DELETE_PROJECT, payload: data}),
	error: (data) => dispatch({type: PROJECTS_ERROR, payload: data}),
	getUpdate: (data) => dispatch({type: GET_UPDATE_PROJECTS, payload: data}),
};
