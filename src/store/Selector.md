# Redux Selectors (Generalized)
## Projects Selector
```react
import {createSelector} from "reselect";

const selectAllProjects = (state) => state.projects;

const selectProjects = createSelector([selectAllProjects], (projects) => {
    // Projects Sorting
	projects.render = [...projects.show].sort((a, b) => a - b);
	return projects;
});

export {selectProjects};
```
## Project Selector
```react
import {createSelector} from "reselect";

const selectSingleProject = (state) => state.project;

const selectProject = createSelector([selectSingleProject], (project) => project);

export {selectProject};
```