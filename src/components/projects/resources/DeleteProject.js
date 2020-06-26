import "./styles/DeleteProject.scss";

import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {selectProject} from "../../../store/components/project/project.selector";
import {deleteProject} from "../../../store/components/projects/projects.API";
import {useAPI} from "../../../utils/useAPI";

const DeleteProject = ({id, title, userId}) => {
	const {register, handleSubmit, reset} = useForm();
	// eslint-disable-next-line no-unused-vars
	const {onSubmit, apiError} = useAPI({apiFn: deleteProject, reset});

	return (
		<form className="DeleteProject box" onSubmit={handleSubmit(onSubmit)}>
			<input ref={register({required: true})} name="id" type="hidden" value={id} />
			<p>
				title: <span>{title}</span>
			</p>
			<p>
				userId: <span>{userId}</span>
			</p>
			<button type="submit">Delete</button>
		</form>
	);
};

const mapStateToProps = (state) => ({...selectProject(state)});

export default connect(mapStateToProps)(DeleteProject);
