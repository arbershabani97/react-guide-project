import {GET_PROJECTS, POST_PROJECT, PUT_PROJECT, DELETE_PROJECT, PROJECTS_ERROR} from "../../actionTypes";
import store from "../../index";
const {dispatch} = store;

export default {
	get: (data) => dispatch({type: GET_PROJECTS, payload: data}),
	post: (data) => dispatch({type: POST_PROJECT, payload: data}),
	put: (data) => dispatch({type: PUT_PROJECT, payload: data}),
	delete: (data) => dispatch({type: DELETE_PROJECT, payload: data}),
	error: (data) => dispatch({type: PROJECTS_ERROR, payload: data}),
};
