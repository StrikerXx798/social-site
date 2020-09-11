import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {AxiosPromise} from "axios";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    userId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    savePhoto: (e: any)=>void
    updateStatus: (status: string) => void
    saveProfile: (dataForm: any) => Promise<AxiosPromise>;
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<any>;

const ProfileContainer: React.FC<PropsType> = (props) => {

    useEffect(()=>{
        let userId = props.match.params.userId;
        if (!userId) userId = props.userId;
        if(!userId) props.history.push("/login");
        props.getUserProfile(userId);
        props.getStatus(userId);
    },[props.match.params.userId]);

    return (
        <div>
            <Profile isOwner={!props.match.params.userId} {...props} profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus}/>
        </div>
    )
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>(
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer)