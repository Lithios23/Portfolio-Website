import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

export default function ProjectsCarrousel({projects}) {
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center'>
        <button className='w-100 d-flex justify-content-center bg-white bg-opacity-25 border-0 rounded-4'>
          <Image src={project.img} className="h-100"/>
        </button>
      </div>
    )
  })
  
  return (
    <Container fluid className="p-0 d-flex flex-column h-100">
        <button className='border-0 bg-primary text-white'>
          {<FontAwesomeIcon icon={faChevronUp} size="2x"/>}
        </button>
        <div className='projects-container flex-grow-1 h-100'>
            {projectsCards}
        </div>
        <button className='border-0 bg-primary text-white'>
          {<FontAwesomeIcon icon={faChevronDown} size="2x"/>}
        </button>
    </Container>
  )
}
