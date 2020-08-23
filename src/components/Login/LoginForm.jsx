import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {CreateField, Input} from "../common/FormControls/FormControls";
import classes from '../common/FormControls/FormControls.module.css'
import React from "react";

const LoginForm =({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {CreateField('Email', required, 'email', Input, 'text')}
            {CreateField('Password', required, 'password', Input, 'password')}
            {CreateField(null, [], 'rememberMe', Input, 'checkbox', 'Remember me')}

            {error && <div className={classes.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>)
}

export default reduxForm({form: 'login'}) (LoginForm)