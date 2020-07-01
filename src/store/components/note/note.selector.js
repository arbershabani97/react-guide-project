import _keys from "lodash/keys";
import _pick from "lodash/pick";
import {createSelector} from "reselect";

import {selectorModel} from "./note.model";

const myNote = (state) => state.note;

const selectNote = createSelector([myNote], (note) => _pick(note, _keys(selectorModel)));

export {selectNote};
