import {DELETE_NOTE, GET_NOTES, GET_UPDATE_NOTES, POST_NOTE, PUT_NOTE} from "../../actionTypes";
import {RestfulReducer, RestfulState} from "../../helpers/RestfulReducer";

export default (state = RestfulState, action) => {
	switch (action.type) {
		case GET_NOTES:
			return RestfulReducer.get(state, action);

		case GET_UPDATE_NOTES:
			return RestfulReducer.get(state, action, true);

		case POST_NOTE:
			return RestfulReducer.post(state, action);

		case PUT_NOTE:
			return RestfulReducer.put(state, action);

		case DELETE_NOTE:
			return RestfulReducer.delete(state, action);

		default:
			return state;
	}
};
