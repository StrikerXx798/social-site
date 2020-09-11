import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
/*

type MapStatePropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;
*/

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {getAuthUserData, logout}))(HeaderContainer);