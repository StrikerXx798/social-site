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
    ]
};

const dialogsReducer = (state =  initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: body, id: '6'}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer