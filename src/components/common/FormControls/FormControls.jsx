import React from "react";
import s from './FormControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error, children}, ...props}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}

export const CreateField = (placeholder, validators, name, component, type, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               validate={validators}
               name={name} component={component} type={type} {...props}/> {text}
    </div>
)