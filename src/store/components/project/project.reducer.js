import {SELECT_PROJECT, REMOVE_PROJECT} from "../../actionTypes";
import _pick from "lodash/pick";
import _keys from "lodash/keys";
import {reducerModel} from "./project.model";

const modelFn = (item) => _pick(item, _keys(reducerModel));

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_PROJECT:
			return state.id === action.payload.id ? modelFn({...state, ...action.payload}) : modelFn(action.payload);

		case REMOVE_PROJECT:
			return modelFn({});

		default:
			return state;
	}
};
