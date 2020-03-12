import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <img className={classes.post_img} src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' />
            {props.message}
            <div>
                <span>Likes</span>
                {props.likes}
            </div>
        </div>
    )
}
export default Post