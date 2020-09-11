import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.tsx';
import PropTypes from 'prop-types'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {BigButton} from "../../common/Buttons/Buttons";


let MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newPostText" className={s.textarea} placeholder="Your text..."
              /* validate={[required, maxLength10]}*/
        />
        <div>
            <BigButton name="ADD POST"/>
        </div>
    </form>
};

MyPostsForm = reduxForm({form: "ProfileMyPostsForm"})(MyPostsForm);

const MyPosts = (props) => {
        let postsElements = props.postsData.map(onePost => <Post updatePost={props.updatePost} deletePost={props.deletePost} key={onePost.message} onePost={onePost}/>);
        let onAddPost = (values) => {
            if(values.newPostText) props.addPost(values.newPostText);
        };
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <MyPostsForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    };
export default MyPosts;

MyPosts.propTypes = {
    addPost: PropTypes.func,
    updateNewPostText: PropTypes.func,
    postsData: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            message: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
            ]),
            likesCount: PropTypes.number
        })
    ),
    newPostText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object])

};