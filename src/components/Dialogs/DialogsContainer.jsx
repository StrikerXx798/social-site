import {
    addMessageToSpam,
    deleteMessageForOwner,
    getMessagesNewerThenLast,
    init,
    restoreMessage,
    sendMessage,
    dialogsReduserActionCreators,
    updateDialog
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import React from 'react'
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.init(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId != this.props.userId) {
            this.props.updateDialog(this.props.userId);
        }
    }

    componentWillUnmount() {
        this.props.setCurrentDialog(null);
    }

    render() {
        return <Dialogs {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        ownerId: state.auth.userId,
        currentDialogMessagesCount: state.dialogsPage.currentDialogMessagesCount
    }
};

const mapDispatchToProps = {
    init,
    updateDialog,
    sendMessage,
    getMessagesNewerThenLast,
    setCurrentDialog: dialogsReduserActionCreators.setCurrentDialog,
    deleteMessageForOwner,
    restoreMessage,
    addMessageToSpam
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);

