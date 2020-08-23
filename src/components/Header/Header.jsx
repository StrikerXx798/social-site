import React from 'react';
import classes from './Header.module.css';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (<header className={classes.header}>
    <img src='https://cdn.iconscout.com/icon/free/png-256/opacity-1781473-1513793.png'  alt={''}/>
    <div className={classes.loginBlock}>
      { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <div>
              <Preloader isFetching={props.isFetching}/>
              <NavLink to={'/login'}>Login</NavLink>
      </div> }
    </div>
  </header>)
}

export default Header