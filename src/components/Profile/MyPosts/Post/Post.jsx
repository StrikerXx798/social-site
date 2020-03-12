import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
    return (
        <div>
            <img className={classes.post_img} src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' />
            Post 1
            <div>
                <span>Likes</span>
                10
            </div>
        </div>
    )
}
export default Post