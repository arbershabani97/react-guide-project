import {GET_PROJECTS, POST_PROJECT, PUT_PROJECT, DELETE_PROJECT, PROJECTS_ERROR, GET_UPDATE_PROJECTS} from "../../actionTypes";
import _pick from "lodash/pick";
import _keys from "lodash/keys";
import _unionWith from "lodash/unionWith";
import _union from "lodash/union";
import _filter from "lodash/filter";
import _map from "lodash/map";
import _uniqBy from "lodash/uniqBy";
import requestIdFilter from "../../helpers/requestIdFilter";
import {reducerModel} from "./projects.model";

const modelFn = (item) => _pick(item, _keys(reducerModel));

export default (state = [], action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return _map(_uniqBy([...action.payload.slice(0, 5), ...state], "id"), modelFn);

		case GET_UPDATE_PROJECTS:
			return _map([...action.payload.slice(0, 3)], modelFn);

		case POST_PROJECT:
			if (!action.payload.id) action.payload.id = Math.floor(Math.random() * 100);
			return _unionWith([modelFn(action.payload)], state, requestIdFilter);

		case PUT_PROJECT:
			return action.payload.success ? _unionWith([modelFn(action.payload), ...state], requestIdFilter) : _union([modelFn(action.payload)], state);

		case DELETE_PROJECT:
			return action.payload.success ? _filter(state, (i) => i.id !== action.payload.id) : _union([modelFn(action.payload)], state);

		case PROJECTS_ERROR:
			return _filter(state, (i) => i.requestId !== action.payload.requestId);

		default:
			return state;
	}
};
