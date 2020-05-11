import projects from "./projects/projects.reducer";
import {combineReducers} from "redux";
import project from "./project/project.reducer";

const appReducer = combineReducers({
	projects,
	project,
});

export default appReducer;
