import "./styles/EditProject.scss";

import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import _debounce from "lodash/debounce";

import {putProject} from "../../../store/components/projects/projects.API";
import {selectProject} from "../../../store/components/project/project.selector";

const EditProject = ({id, title: pTitle, userId: pUserId}) => {
	const {register, handleSubmit, errors} = useForm();

	const onSubmit = useCallback(
		_debounce(async ({title, userId}) => {
			try {
				await putProject({id, title, userId});
			} catch (e) {
				console.error(e);
			}
		}, 300),
		[id],
	);

	return (
		<form className="EditProject" onSubmit={handleSubmit(onSubmit)}>
			<input type="text" name="title" ref={register({required: true})} placeholder="title" defaultValue={pTitle} />
			<input type="text" name="userId" ref={register({required: true})} placeholder="userId" defaultValue={pUserId} />
			<button type="submit">Submit</button>
		</form>
	);
};

const mapStateToProps = (state) => ({...selectProject(state)});

export default connect(mapStateToProps)(EditProject);
