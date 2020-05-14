import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {toggleIsFetching} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true,
                headers: {'API-KEY': 'cfaface2-28da-4d76-88dc-dbbe029d9acd' }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email)
                }
            });
    }

    render() {
        return (<Header {...this.props}/>)
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}



export default connect (mapStateToProps, {setAuthUserData, toggleIsFetching}) (HeaderContainer)