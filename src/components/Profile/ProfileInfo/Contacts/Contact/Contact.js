import React from 'react';
import s from './Contact.module.css'

const Contact = (props) => {
    return <div className={s.contact}><a href={props.link}><img title={props.name} src={props.src} alt=""/></a></div>
};

export default Contact