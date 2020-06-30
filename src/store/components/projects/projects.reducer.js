import {DELETE_PROJECT, GET_PROJECTS, GET_UPDATE_PROJECTS, POST_PROJECT, PUT_PROJECT} from "../../actionTypes";
import {RestfulReducer, RestfulState} from "../../helpers/RestfulReducer";

export default (state = RestfulState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return RestfulReducer.get(state, action);

		case GET_UPDATE_PROJECTS:
			return RestfulReducer.getUpdate(state, action);

		case POST_PROJECT:
			return RestfulReducer.post(state, action);

		case PUT_PROJECT:
			return RestfulReducer.put(state, action);

		case DELETE_PROJECT:
			return RestfulReducer.delete(state, action);

		default:
			return state;
	}
};
