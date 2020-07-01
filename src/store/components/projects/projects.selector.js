import {createSelector} from "reselect";

const selectAllProjects = (state) => state.projects;

const selectProjects = createSelector([selectAllProjects], (projects) => {
	// Projects Sorting
	projects.render = [...projects.show].sort((a, b) => a - b);
	return projects;
});

export {selectProjects};
