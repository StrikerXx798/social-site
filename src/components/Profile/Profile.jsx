import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div>
               <img className="background_img" src="https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
