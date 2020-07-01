import {combineReducers} from "redux";

import note from "./note/note.reducer";
import notes from "./notes/notes.reducer";
import project from "./project/project.reducer";
import projects from "./projects/projects.reducer";

const appReducer = combineReducers({
	projects,
	project,
	notes,
	note,
});

export default appReducer;
