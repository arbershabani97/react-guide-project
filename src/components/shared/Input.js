import React from "react";
import "./Input.scss";
const Input = ({type, name, placeholder, register, error}) => {
    const className = error ? "has-error":"";
    return (
        <label className={className}>
            <input type={type} name={name} ref={register} placeholder={placeholder} />
            {error?.message && <span className="error">{error.message}</span>}
        </label>
    )
}
export default Input;