import React from 'react';
import classes from './Users.module.css'

let Users = (props) => {

/*
    props.setUsers([
            {
                id: '1',
                followed: false,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
                fullName: 'Eugenie',
                status: 'Hello world',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: '2',
                followed: true,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
                fullName: 'Alexander',
                status: 'Hello world',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: '3',
                followed: false,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png",
                fullName: 'Dimitry',
                status: 'Hello world',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ]
    )
*/

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={classes.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {props.unfollow(u.id)}}>Follow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Unfollow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;