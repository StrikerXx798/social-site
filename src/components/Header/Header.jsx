import React from 'react';
import s from './Header.module.css';
import {BigButton} from "../common/Buttons/Buttons";
import logo from '../../assets/images/logoSite.png'
/*
type PropsType = {
    login: null | string
    logout: ()=>void

}*/

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src={logo}
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} <BigButton name="Logout" callback={props.logout}/></div> :
                    <BigButton callback={()=>{props.history.push("/login")}} name="Sign In"/>}
            </div>
        </header>
    );
};

export default Header;