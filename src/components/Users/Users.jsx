import React from 'react';
import classes from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/User_icon_2.svg.png'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={classes.usersPhoto} alt=''/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>Follow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Unfollow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;