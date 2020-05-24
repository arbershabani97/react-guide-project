import "./styles/DeleteProject.scss";

import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import _debounce from "lodash/debounce";

import {deleteProject} from "../../../store/components/projects/projects.API";
import {selectProject} from "../../../store/components/project/project.selector";

const DeleteProject = ({id, title, userId}) => {
	const {handleSubmit} = useForm();
	const onSubmit = useCallback(
		_debounce(async () => {
			try {
				await deleteProject({id});
			} catch (e) {
				console.error(e);
			}
		}, 300),
		[id],
	);

	return (
		<form className="DeleteProject box" onSubmit={handleSubmit(onSubmit)}>
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
