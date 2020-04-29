const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {posts: 'Hello, how are you?', id: '1', likes: ' 23'},
        {posts: "It my first post!", id: '2', likes: ' 18'},
        {posts: "Js it's my big trouble", id: '3', likes: ' 10'},
        {posts: "I must flying forward", id: '4', likes: ' 18'},
        {posts: 'Marimo!!!!', id: '5', likes: ' 1'}
    ],
    newPostText: "Add you text Post..."
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {id: 5, posts: state.newPostText, likes: ' 0'}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer