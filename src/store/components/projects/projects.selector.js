import _keys from "lodash/keys";
import _pick from "lodash/pick";
import {createSelector} from "reselect";

import {selectorModel} from "./projects.model";

const modelFn = (item) => _pick(item, _keys(selectorModel));

const selectAllProjects = (state) => state.projects;

const selectProjects = createSelector([selectAllProjects], (projects) => {
	projects.show.forEach((id) => {
		projects.list[id] = modelFn(projects.list[id]);
	});
	projects.render = [...projects.show].sort((a, b) => a - b);
	return projects;
});

export {selectProjects};
