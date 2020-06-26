import "./styles/CreateProject.scss";

import React from "react";
import {useForm} from "react-hook-form";

import {postProject} from "../../../store/components/projects/projects.API";
import {useAPI} from "../../../utils/useAPI";
import Input from "../../shared/Input";

const CreateProject = () => {
	const {register, handleSubmit, errors, reset} = useForm();
	const {onSubmit, apiError} = useAPI({apiFn: postProject, reset});
	
	return (
		<form className="CreateProject" onSubmit={handleSubmit(onSubmit)}>
			<Input 
				type="text" 
				name="title" 
				placeholder="title" 
				register={register({
					required:"Your input is required", 
					maxLength:{
						value: 3,
						message: 'This input exceed maxLength.',
					}
				})} 
				error={errors?.["title"]} 
				/>
			<Input 
				type="text" 
				name="userId" 
				placeholder="userId" 
				register={register({required:"Your input is required"})} 
				error={errors?.["userId"]} 
				/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default CreateProject;
