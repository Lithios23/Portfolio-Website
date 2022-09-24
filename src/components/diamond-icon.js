import React from 'react';
import Style from '../sass/diamond-icon.module.scss'

export default function ContactIcon(props) {
  
  const style = {
    width: props.size,
  }
  
  return (
  
    <div className={Style.wrapper}>
      <a href={props.url} target={props.local ? '_self' : '_blank'} rel='noreferrer' style={style} className={`${props.active ? Style.active : ''} ${Style.diamondIcon} ${props.animated ? Style.animated : ''} text-white border border-4 d-flex align-items-center justify-content-center`}>
        {props.icon}
      </a>
    </div>
    
  )
}
