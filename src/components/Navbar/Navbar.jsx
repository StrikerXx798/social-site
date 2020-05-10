import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (<nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to='/profile' activeClassName={classes.activelink}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/dialogs' activeClassName={classes.activelink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' activeClassName={classes.activelink}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/music' activeClassName={classes.activelink}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/settings' activeClassName={classes.activelink}>Settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/users' activeClassName={classes.activelink}>Users</NavLink>
    </div>
  </nav>)
}

export default Navbar