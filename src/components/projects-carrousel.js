import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ProjectsCarrousel({projects}) {
  
  const projectsCards = projects.map((projects, item) => {
    
  })
  
  return (
    <div>
        <button>{<FontAwesomeIcon icon={faChevronUp}/>}</button>
        <div className='projects-container'>

        </div>
        <button>{<FontAwesomeIcon icon={faChevronDown}/>}</button>
    </div>
  )
}
