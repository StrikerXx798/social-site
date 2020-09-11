import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {BigButton, PagesButton} from "../common/Buttons/Buttons";
import {Route} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(user => <DialogItem key={user.id} user={user}/>);
    let messageElements = state.messages.map(oneMessage => <Message addMessageToSpam={props.addMessageToSpam} restoreMessage={props.restoreMessage} deletedMessages={state.deletedMessages} deleteMessageForOwner={props.deleteMessageForOwner} ownerId={props.ownerId} key={oneMessage.id}
                                                                    oneMessage={oneMessage}/>);

    const MessagesComponent = () => <div className={s.containerMessages}>
        <div className={s.buttonPrevMes}>
            <PagesButton isVisible={props.currentDialogMessagesCount > state.messages.length}
                         name="show prev messages"/>
        </div>
        {messageElements}
    </div>;

    const addNewMessage = (value) => {
        if (value.newMessageBody) props.sendMessage(props.userId, value.newMessageBody);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {state.selectedDialogId===null && <div className={s.messageToSelectDialog}>Please select dialog</div>}
                {state.selectedDialogId!==null && <Route path={`/dialogs/${state.selectedDialogId}`} render={()=><MessagesComponent/>}/>}
            </div>
            {state.selectedDialogId!==null &&<AddMessageReduxForm onSubmit={addNewMessage}/>}
        </div>
    )
};

export default Dialogs;

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field className={s.text} placeholder={"Your message..."}
               name={"newMessageBody"} component={Textarea}
               validate={[ maxLength50]}
        />
        <div>
            <BigButton name="SEND"/>
        </div>
    </form>
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

