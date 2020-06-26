import "./styles/ShowProject.scss";

import React from "react";
import {connect} from "react-redux";

import {getProject} from "../../../store/components/project/project.API";
import {selectProject} from "../../../store/components/project/project.selector";
import {useFetchAPI} from "../../../utils/useFetchAPI";

const ShowProject = ({id, title, userId, body}) => {
	// eslint-disable-next-line no-unused-vars
	const {handleClick, results, apiError} = useFetchAPI({apiFn: getProject, data: id});

	return (
		<div className="ShowProject box">
			<p>
				id: <span>{id}</span>
			</p>
			<p>
				title: <span>{title}</span>
			</p>
			<p>
				userId: <span>{userId}</span>
			</p>
			{body && (
				<p>
					body: <span>{body}</span>
				</p>
			)}
			<button onClick={handleClick} type="button">
				Get Project
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({...selectProject(state)});

export default connect(mapStateToProps)(ShowProject);
