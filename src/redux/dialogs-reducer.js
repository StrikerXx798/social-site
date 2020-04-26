const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { message: "Hi!", id: '1' },
        { message: "How are you", id: '2' },
        { message: "You site is very horrible :(", id: '3' },
        { message: 'See you next time!', id: '4' },
        { message: 'Marimo!!!!', id: '5' }
    ],
    dialogs: [
        { name: 'Jenya', id: '1' },
        { name: 'Anton', id: '2' },
        { name: 'Sasha', id: '3' },
        { name: 'Lera', id: '4' },
        { name: 'Viktor', id: '5' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state =  initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({message: body, id: '6'});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer