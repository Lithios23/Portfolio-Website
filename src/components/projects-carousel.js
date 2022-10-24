import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretUp, faSquareCaretDown} from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Style from '../sass/project-carousel.module.scss'
import Stack from 'react-bootstrap/Stack'
import DiamondIcon from './diamond-icon'

export default function ProjectsCarousel({projects}) {

  const [carouselPosition, setCarouselPosition] = useState(0);
  const [visibleProject, setVisibleProject] = useState(0);

  const proCont = React.createRef();
  
  const degreesAmount = 360/projects.length;

  useEffect(() => {
    let projectsContainer;
    projectsContainer = proCont.current;
    projectsContainer.addEventListener("wheel", e => {
      e.preventDefault();

      if (e.deltaY > 0) {
        ScrollDown();
      }
      else {
        ScrollUp();
      }
    });
  })

  const ScrollUp = () => {
    setCarouselPosition(carouselPosition+1);
    visibleProject > 0 ? setVisibleProject(visibleProject-1) : setVisibleProject(projects.length-1);
  }
  
  const ScrollDown = () => {
    setCarouselPosition(carouselPosition-1);
    visibleProject < projects.length-1 ? setVisibleProject(visibleProject+1) : setVisibleProject(0);
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <React.Fragment key={pos}>
      <div className={`${Style.projectCard}`} key={pos}>
        <img className='w-100 h-100' src={project.img} alt='Project'/>
        <Stack direction='horizontal' gap={5} className='justify-content-center w-100 h-100 opacity-0 position-absolute top-0'>
          <DiamondIcon animated icon={<FontAwesomeIcon icon={faGithub} size="3x" transform={{rotate: -45}}/>} url={project.repository} size='80px'/>
          {project.hasOwnProperty('url') ? <DiamondIcon animated icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" transform={{rotate: -45}}/>} url={project.url} size='80px'/> : null}
        </Stack> 
      </div>
      <span className={`w-100 ${Style.cardBack}`} key={pos + '-back'}></span>
      </React.Fragment>
    )
  })

  const projectTechs = projects[visibleProject].technologies.map((technology, pos) => {
    return (
      <span key={pos}>{technology}</span>
    )
  })

  const {title, description} = projects[visibleProject];
  
  return (
    <Row className='m-0 my-auto w-100 align-items-center p-0' style={{columnGap:'4%'}}>
      <Col md='auto' id={Style.carouselContainer} className='col-12 px-0 h-100 d-flex flex-column align-items-center mb-5 mb-md-0 mb-sm-3'>
        <div id={Style.carousel} className='d-flex flex-column'>
          <button className='border-0 bg-transparent text-white' onClick={() => ScrollUp()}>
            <FontAwesomeIcon icon={faSquareCaretUp} size='2x'/>
          </button>
          <div className='h-100 w-100 position-relative' id={Style.projectsCardsContainer} ref={proCont} style={{transform: `rotatex(${degreesAmount*carouselPosition}deg)`}}>
            {projectsCards}
          </div>
          <button className='border-0 bg-transparent text-white' onClick={() => ScrollDown()}>
            <FontAwesomeIcon icon={faSquareCaretDown} size='2x'/>
          </button>
        </div>
      </Col>
      <Col className='p-0' id={Style.projectInfoContainer}>
        <h3 className='title w-100 text-center'>{title}</h3>
        <p className='p-3 body-text'>{description}</p>
        <Stack direction='horizontal' gap={4} className='d-flex justify-content-center technologies'>
          {projectTechs}
        </Stack>
      </Col>
    </Row> 
  )
}
