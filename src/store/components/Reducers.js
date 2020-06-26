import {combineReducers} from "redux";

import project from "./project/project.reducer";
import projects from "./projects/projects.reducer";

const appReducer = combineReducers({
	projects,
	project,
});

export default appReducer;
