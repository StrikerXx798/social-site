import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <img className={classes.dialog_img} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
            <NavLink to={path} activeClassName={classes.activelink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;