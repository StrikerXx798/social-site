import React from 'react';
import classes from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItems name={d.name} id={d.id} /> )
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} /> )
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth)return <Redirect to='*/login'/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;