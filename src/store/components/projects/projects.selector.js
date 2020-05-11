import _pick from "lodash/pick";
import _keys from "lodash/keys";
import _uniqWith from "lodash/uniqWith";
import _sortBy from "lodash/sortBy";
import _map from "lodash/map";
import _filter from "lodash/filter";
import requestPriorityFilter from "../../helpers/requestPriorityFilter";
import {selectorModel} from "./projects.model";
import {createSelector} from "reselect";

const modelFn = (item) => _pick(item, _keys(selectorModel));

const selectAllProjects = (state) => state.projects;

const selectProjects = createSelector([selectAllProjects], (projects) => {
	// Show Unique Data
	const uniqueData = _uniqWith(projects, requestPriorityFilter);
	// Filter Deleted Projects
	const filteredData = _filter(uniqueData, (i) => !i.deleted);
	// Return Sorted Projects -- Optional
	const sortedData = _sortBy(filteredData, "id");
	// Return Specific Model
	const transformedData = _map(sortedData, modelFn);

	return transformedData;
});

export {selectProjects};
