import "./styles/_Project.scss";

import React, {useCallback} from "react";
import {updateProject} from "../../store/components/project/project.action";

const _Project = ({project, onToggle}) => {
	const handleClick = useCallback(
		(e) => {
			onToggle(e);
			updateProject(project);
		},
		[project],
	);

	const {title, userId} = project;
	return (
		<div className="_Project box">
			<p>
				title: <span>{title}</span>
			</p>
			<p>
				userId: <span>{userId}</span>
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

export default React.memo(_Project);
