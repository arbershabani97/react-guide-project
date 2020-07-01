import {DELETE_PROJECT, GET_PROJECTS, GET_UPDATE_PROJECTS, POST_PROJECT, PUT_PROJECT} from "../../actionTypes";
import {RestfulReducerAOT, RestfulStateAOT} from "../../helpers/RestfulReducerAOT";

export default (state = RestfulStateAOT, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return RestfulReducerAOT.get(state, action);

		case GET_UPDATE_PROJECTS:
			return RestfulReducerAOT.get(state, action, true);

		case POST_PROJECT:
			return RestfulReducerAOT.post(state, action);

		case PUT_PROJECT:
			return RestfulReducerAOT.put(state, action);

		case DELETE_PROJECT:
			return RestfulReducerAOT.delete(state, action);

		default:
			return state;
	}
};
