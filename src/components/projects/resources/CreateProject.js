import "./styles/CreateProject.scss";

import React, {useCallback} from "react";
import {useForm} from "react-hook-form";
import _debounce from "lodash/debounce";

import {postProject} from "../../../store/components/projects/projects.API";

const CreateProject = () => {
	const {register, handleSubmit, errors, reset} = useForm();

	const onSubmit = useCallback(
		_debounce(async ({title, userId}) => {
			try {
				await postProject({title, userId});
				reset();
			} catch (e) {
				console.error(e);
			}
		}, 300),
		[],
	);

	return (
		<form className="CreateProject" onSubmit={handleSubmit(onSubmit)}>
			<input type="text" name="title" ref={register({required: true})} placeholder="title" />
			<input type="text" name="userId" ref={register({required: true})} placeholder="userId" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default CreateProject;
