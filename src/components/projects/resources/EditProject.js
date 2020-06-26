import "./styles/EditProject.scss";

import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {useAPI} from "../../../utils/useAPI";
import Input from "../../shared/Input";

import {putProject} from "../../../store/components/projects/projects.API";
import {selectProject} from "../../../store/components/project/project.selector";

const EditProject = ({id, title, userId}) => {
	const {register, handleSubmit, errors, reset} = useForm();
	const {onSubmit, apiError} = useAPI({apiFn: putProject, reset});

	return (
		<form className="EditProject" onSubmit={handleSubmit(onSubmit)}>
			<input type="hidden" name="id" ref={register({required: true})} value={id} />
			<Input 
				type="text" 
				name="title" 
				placeholder="title"
				defaultValue={title}
				register={register({required:"Your input is required"})} 
				error={errors?.["title"]} 
				/>
			<Input 
				type="text" 
				name="userId" 
				placeholder="userId" 
				defaultValue={userId}
				register={register({required:"Your input is required"})} 
				error={errors?.["userId"]} 
				/>
			<button type="submit">Submit</button>
		</form>
	);
};

const mapStateToProps = (state) => ({...selectProject(state)});

export default connect(mapStateToProps)(EditProject);
