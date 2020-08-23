import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login =(props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

const msp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(msp, {login, logout}) (Login)