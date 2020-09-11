import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Mikky"},
                {id: 2, name: "Jey"},
                {id: 3, name: "Anastasia"},
                {id: 4, name: "Kris"},
                {id: 5, name: "Braian"},
                {id: 6, name: "Tod"},
            ],
            messagesData: [
                {id: 0, message: "Hello!"},
                {id: 2, message: "Hi))"},
                {id: 2, message: "How are you?"},
                {id: 0, message: "Ok) And you?"},
                {id: 0, message: "We will meet on the weekends. Are you with us?"},
                {id: 2, message: "Not good. I don't know now. I will say you tommorow."},
            ],
            newMessageText: ''
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 5},
                {id: 2, message: 'It\'s my first post', likesCount: 20}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
        },
};

window.store = store;
export default store;