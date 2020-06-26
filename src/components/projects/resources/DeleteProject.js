import "./styles/DeleteProject.scss";

import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {useAPI} from "../../../utils/useAPI";

import {deleteProject} from "../../../store/components/projects/projects.API";
import {selectProject} from "../../../store/components/project/project.selector";

const DeleteProject = ({id, title, userId}) => {
	const {register, handleSubmit, reset} = useForm();
	const {onSubmit, apiError} = useAPI({apiFn: deleteProject, reset});

	return (
		<form className="DeleteProject box" onSubmit={handleSubmit(onSubmit)}>
			<input type="hidden" name="id" value={id} ref={register({required: true})} />
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
