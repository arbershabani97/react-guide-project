import _pick from "lodash/pick";
import _keys from "lodash/keys";
import {selectorModel} from "./project.model";
import {createSelector} from "reselect";

const myProject = (state) => state.project;

const selectProject = createSelector([myProject], (project) => _pick(project, _keys(selectorModel)));

export {selectProject};
