import "./styles/ListProjects.scss";

import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {getProjects} from "../../../store/components/projects/projects.API";
import {selectProjects} from "../../../store/components/projects/projects.selector";
import Project from "../_Project";

const ListProjects = ({projects, onToggle}) => {
	const [currentPage, setCurrentPage] = useState(0);

	// Fetch Projects by providing page number
	const fetchProjects = async (page) => {
		try {
			// await getProjects({page});
			await getProjects();
			setCurrentPage(page);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		fetchProjects(1);
	}, []);

	// Handle Next Click - Add Next Page
	const handleNext = async () => fetchProjects(currentPage + 1);

	// Handle Filter Click - Filter Pages
	const handleFilter = async () => {
		try {
			// await getProjects({page:1, userId: 1}, true);
			await getProjects(null, true);
		} catch (e) {
			console.error(e);
		}
	};

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
		</>
	);
};
const mapStateToProps = (state) => ({projects: selectProjects(state)});

export default connect(mapStateToProps)(ListProjects);
