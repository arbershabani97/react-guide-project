import _keys from "lodash/keys";
import _pick from "lodash/pick";

import {REMOVE_NOTE, SELECT_NOTE} from "../../actionTypes";
import {reducerModel} from "./note.model";

const modelFn = (item) => _pick(item, _keys(reducerModel));

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_NOTE:
			return state.id === action.payload.id ? modelFn({...state, ...action.payload}) : modelFn(action.payload);

		case REMOVE_NOTE:
			return {};

		default:
			return state;
	}
};
