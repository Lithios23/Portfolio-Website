import React from 'react';
import Styles from '../sass/diamond-icon.module.scss'

export default function ContactIcon(props) {
  
  const style = {
    width: props.size,
    height: props.size
  }
  
  return (
  
    <a href={props.url} target={props.local ? '_self' : '_blank'} rel='noreferrer' style={style} className={`text-white ${props.active ? Styles.active : ''} ${Styles.diamondIcon} ${props.animated ? Styles.animated : ''} border border-4 d-flex align-items-center justify-content-center`}>
        {props.icon}
    </a>
    
  )
}
