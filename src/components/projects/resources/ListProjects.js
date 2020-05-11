import "./styles/ListProjects.scss";

import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getProjects} from "../../../store/components/projects/projects.API";
import {selectProjects} from "../../../store/components/projects/projects.selector";
import Project from "../_Project";

const ListProjects = ({projects, onToggle}) => {
	useEffect(async () => {
		try {
			await getProjects();
		} catch (e) {
			console.error(e);
		}
	}, []);

	return (
		<div className="ListProjects">
			{projects.map((project) => (
				<Project key={project.id} project={project} onToggle={onToggle} />
			))}
		</div>
	);
};
const mapStateToProps = (state) => ({projects: selectProjects(state)});

export default connect(mapStateToProps)(React.memo(ListProjects));
