import React from 'react';
import './form-input.styles.scss'

const FormInput = ( {type, placeholder} ) => (
    <input type = "text" placeholder= {placeholder} className="form-input"/>
)

export default FormInput;