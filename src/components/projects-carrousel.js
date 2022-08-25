import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown , faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Style from '../sass/project-carrousel.module.scss'
import Stack from 'react-bootstrap/Stack'

let scrollLevel = 0;

function ProjectsInfo(projects) {
  
  const projectsDivs = projects.map(({title,description,technologies}, pos) => {
    
    const longTitle = {
      fontSize: '21px'
    }

    const projectTechnologies = technologies.map((technology, pos) => <span key={pos} className={Style.projectTechnologies}>{technology}</span>)

    return (
      <Container fluid className={`p-0 align-items-center d-flex m-0 h-50 ${Style.projectInfo}`} key={pos}>
        <Container fluid className='p-0 d-flex flex-column justify-content-center'>
          <Row style={{height:'15%'}} className='m-0'>
            <Col xs='auto' className='p-0 h-100'>
              <Image src='./title-ends/title-end-left.png' className='h-100'/>
            </Col>
            <Col className='p-0 bg-secondary d-flex align-items-center justify-content-center'>  
              <h3 className='m-0 text-break lh-1' style={title.length > 18 ? longTitle : null} >{title}</h3>
            </Col>
          </Row>
          <div className='d-flex py-2' style={{maxHeight:'75%'}}>
            <p className={`bg-white p-2 bg-opacity-25 my-auto text-white lh-sm m-0 ${Style.projectDescription}`}>{description}</p>
          </div>
          <Stack direction='horizontal' gap={3} className='justify-content-center' style={{height:'10%'}}>
            {projectTechnologies}
          </Stack>
        </Container>
      </Container>
    )
  })
  
  return (
    <Container fluid className='h-100 p-0 d-flex flex-column justify-content-around'>
      {projectsDivs}      
    </Container>
  )
}

export default function ProjectsCarrousel({projects}) {
  
  const [visibleProjects, setVisibleProjects] = useState([projects[scrollLevel], projects[scrollLevel+1]]);

  const proCont = React.createRef();
  let projectsContainer;

  useEffect(() => {
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
    if (scrollLevel > 0){
      scrollLevel--;
      projectsContainer.scrollBy(0, -200);
      setVisibleProjects([projects[scrollLevel], projects[scrollLevel+1]]);
    }
  }
  
  const ScrollDown = () => {
    if (scrollLevel < projects.length-2){
      scrollLevel++;
      projectsContainer.scrollBy(0, 200);
      setVisibleProjects([projects[scrollLevel], projects[scrollLevel+1]]);
    }
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center' key={pos}>
        <button className='w-100 border-0 bg-white bg-opacity-25 d-flex justify-content-center'>
          <img src={project.img} className="h-100"/> 
        </button>
      </div>
    )
  })
  
  return (
    <Container fluid className="p-0 d-flex flex-column h-100 justify-content-center">
      <Row className='p-0 m-0'>
        <Col xs="6" className='p-0 ms-auto d-flex'>
          <button onClick={()=>ScrollUp()} className='border-0 bg-primary text-white mx-auto'>
            {<FontAwesomeIcon icon={faChevronUp} size="2x"/>}
          </button>
        </Col>
      </Row>  
      <Row className='w-100 m-0' style={{height:'77%'}}>
        <Col xs="6" className='p-0 h-100'>
          {ProjectsInfo(visibleProjects)}
        </Col>
        <Col xs="6" className='p-0 h-100'>
          <div id={Style.container} className='h-100 w-100' ref={proCont}>
            {projectsCards}
          </div>
        </Col>
      </Row>
      <Row className='p-0 m-0'>
        <Col xs="6" className='p-0 ms-auto d-flex'>
          <button onClick={()=>ScrollDown()} className='border-0 bg-primary text-white mx-auto'>
            {<FontAwesomeIcon icon={faChevronDown} size="2x"/>}
          </button>
        </Col>
      </Row>  
    </Container>
  )
}
