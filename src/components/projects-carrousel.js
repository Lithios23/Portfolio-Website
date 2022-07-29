import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default function ProjectsCarrousel({projects}) {
  
  const proCont = React.createRef();
  let projectsContainer;

  useEffect(() => {
    projectsContainer = proCont.current;
    projectsContainer.addEventListener("wheel", e => e.preventDefault());
  })

  const ScrollUp = () => {
    console.log(projectsContainer)
  }
  
  const ScrollDown = () => {
    const projectsContainer = document.getElementById('projects-container');
    
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center' key={pos}>
        <button className='w-100 d-flex justify-content-center bg-white bg-opacity-25 border-0 rounded-4'>
          <Image src={project.img} className="h-100"/>
        </button>
      </div>
    )
  })
  
  return (
    <Container fluid className="p-0 d-flex flex-column h-100">
        <button onClick={()=>ScrollUp()} className='border-0 bg-primary text-white'>
          {<FontAwesomeIcon icon={faChevronUp} size="2x"/>}
        </button>
        <div id='projects-container' className='flex-grow-1 h-100' ref={proCont}>
            {projectsCards}
        </div>
        <button onClick={()=>ScrollDown()} className='border-0 bg-primary text-white'>
          {<FontAwesomeIcon icon={faChevronDown} size="2x"/>}
        </button>
    </Container>
  )
}
