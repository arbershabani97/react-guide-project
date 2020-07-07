import "./styles/ShowProject.scss";

import React from "react";
import {connect} from "react-redux";

import {getProject} from "../../../store/components/project/project.API";
import {selectProject} from "../../../store/components/project/project.selector";
import {useFetchAPI} from "../../../utils/useFetchAPI";

const ShowProject = ({project}) => {
	const {id, name, color, ownerId} = project;
	// eslint-disable-next-line no-unused-vars
	const {handleClick, results, loading, apiError} = useFetchAPI({apiFn: getProject, data: id});

	return (
		<div className="ShowProject box">
			<p>
				id: <span>{id}</span>
			</p>
			<p>
				name: <span>{name}</span>
			</p>
			<p>
				color: <span>{color}</span>
			</p>
			{ownerId && (
				<p>
					ownerId: <span>{ownerId}</span>
				</p>
			)}
			<button onClick={handleClick} type="button">
				Get Project
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({project: selectProject(state)});

export default connect(mapStateToProps)(ShowProject);
