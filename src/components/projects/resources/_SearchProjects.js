import "./styles/_SearchProjects.scss";

import React from "react";
import {useSearch} from "../../../utils/useSearch";

import Project from "../_Project";
import {searchProjects} from "../../../store/components/projects/projects.API";

const _SearchProjects = ({onToggle}) => {
	const {searchValue, results, handleChange, apiError} = useSearch({apiFn: searchProjects});

	return (
		<div className="_SearchProjects">
			<input type="search" name="search" onChange={handleChange} value={searchValue} placeholder="Search projects..." />
			{results.map((project) => (
				<Project key={project.id} project={project} onToggle={onToggle} />
			))}
		</div>
	);
};

export default _SearchProjects;
