import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../assets/images/User_icon_2.svg.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize)/25);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p);
                    }}
                    className={props.currentPage === p && classes.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                className={classes.usersPhoto}
                                alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
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