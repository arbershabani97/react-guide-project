import "./styles/EditProject.scss";

import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";

import {selectProject} from "../../../store/components/project/project.selector";
import {putProject} from "../../../store/components/projects/projects.API";
import {useAPI} from "../../../utils/useAPI";
import Input from "../../shared/Input";

const EditProject = ({id, title, userId}) => {
	const {register, handleSubmit, errors, reset} = useForm();
	// eslint-disable-next-line no-unused-vars
	const {onSubmit, apiError} = useAPI({apiFn: putProject, reset});

	return (
		<form className="EditProject" onSubmit={handleSubmit(onSubmit)}>
			<input ref={register({required: true})} name="id" type="hidden" value={id} />
			<Input defaultValue={title} error={errors?.["title"]} name="title" placeholder="title" register={register({required: "Your input is required"})} type="text" />
			<Input defaultValue={userId} error={errors?.["userId"]} name="userId" placeholder="userId" register={register({required: "Your input is required"})} type="text" />
			<button type="submit">Submit</button>
		</form>
	);
};

const mapStateToProps = (state) => ({...selectProject(state)});

export default connect(mapStateToProps)(EditProject);
