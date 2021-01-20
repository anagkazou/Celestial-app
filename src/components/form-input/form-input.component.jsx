import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, type, placeholder, name }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    className="form-input"
  />
);

export default FormInput;
