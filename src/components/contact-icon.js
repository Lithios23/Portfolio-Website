import React from 'react'

export default function ContactIcon(props) {
    return (
    
    <a href={props.url} className='text-white contact-icon border border-4 boder-white d-flex align-items-center justify-content-center'>
        {props.icon}
    </a>
    
  )
}
