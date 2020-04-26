import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state"

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.posts} id={p.id} likes={p.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value = {props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements};
                </div>
        </div>
    )
}


export default MyPosts
