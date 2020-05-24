import "./styles/_SearchProjects.scss";

import React, {useState, useCallback} from "react";
import _debounce from "lodash/debounce";

import {searchProjects} from "../../../store/components/projects/projects.API";
import Project from "../_Project";

const _SearchProjects = ({onToggle}) => {
	const [searchValue, setSearchValue] = useState("");
	const [results, setResults] = useState([]);

	const submitSearch = useCallback(
		_debounce(async (search) => {
			try {
				const {data} = await searchProjects({search});
				setResults(data);
			} catch (e) {
				console.error(e);
			}
		}, 700),
		[],
	);

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		submitSearch(e.target.value);
	};

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
