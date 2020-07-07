import "./styles/_Project.scss";

import React from "react";

import {updateProject} from "../../store/components/project/project.action";

const _Project = ({project, onToggle}) => {
	const handleClick = (e) => {
		onToggle(e);
		updateProject(project);
	};

	const {name, color} = project;
	return (
		<div className="_Project box">
			<p>
				name: <span>{name}</span>
			</p>
			<p>
				color: <span>{color}</span>
			</p>
			<div>
				<button onClick={handleClick} tab="show" type="button">
					Show
				</button>
				<button onClick={handleClick} tab="edit" type="button">
					Edit
				</button>
				<button onClick={handleClick} tab="delete" type="button">
					Delete
				</button>
			</div>
		</div>
	);
};

export default _Project;
