import _filter from "lodash/filter";
import _keys from "lodash/keys";
import _map from "lodash/map";
import _pick from "lodash/pick";
import _sortBy from "lodash/sortBy";
import _uniqWith from "lodash/uniqWith";
import {createSelector} from "reselect";

import requestPriorityFilter from "../../helpers/requestPriorityFilter";
import {selectorModel} from "./projects.model";

const modelFn = (item) => _pick(item, _keys(selectorModel));

const selectAllProjects = (state) => state.projects;

const selectProjects = createSelector([selectAllProjects], (projects) => {
	// Show Unique Data
	const uniqueData = _uniqWith(projects, requestPriorityFilter);
	// Filter Deleted Projects
	// eslint-disable-next-line lodash/prefer-reject
	const filteredData = _filter(uniqueData, (i) => !i.deleted);
	// Return Sorted Projects -- Optional
	const sortedData = _sortBy(filteredData, "id");
	// Return Specific Model
	return _map(sortedData, modelFn);
});

export {selectProjects};
