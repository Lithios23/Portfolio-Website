import React from 'react';
import Styles from '../sass/contact-icon.module.scss'

export default function ContactIcon(props) {
    return (
    
    <a href={props.url} className={`text-white ${Styles.contactIcon} border border-4 boder-white d-flex align-items-center justify-content-center`}>
        {props.icon}
    </a>
    
  )
}
