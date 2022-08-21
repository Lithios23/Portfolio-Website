import React from 'react';
import Styles from '../sass/diamond-icon.module.scss'

export default function ContactIcon(props) {
  
  const style = {
    width: props.size,
    height: props.size
  }
  
  return (
  
    <a href={props.url} style={style} className={`text-white ${Styles.diamondIcon} ${props.animated ? Styles.animated : null} border border-4 boder-white d-flex align-items-center justify-content-center`}>
        {props.icon}
    </a>
    
  )
}
