import _keys from "lodash/keys";
import _pick from "lodash/pick";
import {createSelector} from "reselect";

import {selectorModel} from "./notes.model";

const modelFn = (item) => _pick(item, _keys(selectorModel));

const selectAllNotes = (state) => state.notes;

const selectNotes = createSelector([selectAllNotes], (notes) => {
	notes.show.forEach((id) => {
		notes.list[id] = modelFn(notes.list[id]);
	});
	notes.render = [...notes.show].sort((a, b) => a - b);
	return notes;
});

export {selectNotes};
