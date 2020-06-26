import _keys from "lodash/keys";
import _pick from "lodash/pick";
import {createSelector} from "reselect";

import {selectorModel} from "./project.model";

const myProject = (state) => state.project;

const selectProject = createSelector([myProject], (project) => _pick(project, _keys(selectorModel)));

export {selectProject};
