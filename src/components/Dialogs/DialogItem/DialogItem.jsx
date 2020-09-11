import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types'
import withoughtPhoto from '../../../assets/images/userWithoutPhoto.jpg'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.user.id;
    if(props.user.id!==undefined) return (
        <div className={s.dialogItem}>
            <NavLink to={path} activeClassName={s.active} className={s.dialog}>
                <div>
                    <img
                        src={!!props.user.photos.small ? props.user.photos.small : withoughtPhoto}
                        alt="ave"/>
                </div>
                <div>{props.user.userName}</div>
                {props.user.hasNewMessages&&<div className={s.newMessagesCount}>{props.user.newMessagesCount}</div>}
            </NavLink>
        </div>);
        else return <div className={s.dialogItem}>not found</div>
};


export default DialogItem;

DialogItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string
    })
};