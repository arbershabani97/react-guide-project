import "./Input.scss";

import React from "react";

const Input = ({type, name, placeholder, register, error}) => {
	const className = error ? "has-error" : "";
	return (
		<label className={className}>
			<input ref={register} name={name} placeholder={placeholder} type={type} />
			{error?.message && <span className="error">{error.message}</span>}
		</label>
	);
};
export default Input;
