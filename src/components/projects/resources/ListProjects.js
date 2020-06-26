import "./styles/ListProjects.scss";

import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useFilterPaginationAPI} from "../../../utils/useFilterPaginationAPI";

import {getProjects} from "../../../store/components/projects/projects.API";
import {selectProjects} from "../../../store/components/projects/projects.selector";
import Project from "../_Project";

const ListProjects = ({projects, onToggle}) => {
	const {handleFetch, results, apiError, currentPage, loadedPages} = useFilterPaginationAPI({apiFn: getProjects});

	useEffect(() => handleFetch({page: 1}), []);

	// Handle Next Click - Add Next Page
	const handleNext = () => handleFetch({page: currentPage + 1});
	// Handle Filter Click - Filter Pages
	const handleFilter = () => handleFetch({page: currentPage + 1, userId: 1});
	// Handle Filter Click - Show Only Selected Page
	const handleOnlyNext = () => handleFetch({page: currentPage + 1}, true);

	return (
		<>
			<div className="ListProjects">
				{projects.map((project) => (
					<Project key={project.id} project={project} onToggle={onToggle} />
				))}
			</div>
			<button type="button" onClick={handleNext}>
				Get Next Page
			</button> 
			<button type="button" onClick={handleFilter}>
				Filter Projects
			</button> 
			<button type="button" onClick={handleOnlyNext}>
				Get Only Next Page
			</button>
		</>
	);
};
const mapStateToProps = (state) => ({projects: selectProjects(state)});

export default connect(mapStateToProps)(ListProjects);
