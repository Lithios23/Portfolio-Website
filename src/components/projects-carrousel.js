import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

let scrollLevel = 0;

function ProjectsTitles(titles) {
  
  const titleDivs = titles.map((title, pos) => {
    
    const longTitle = {
      fontSize: '21px'
    }

    return (
      <Row className='p-0 text-center d-flex title-divs m-0' key={pos}>
        <Col xs='auto' className='p-0 h-100'>
          <Image src='./title-ends/title-end-left.png' className='h-100'/>
        </Col>
        <Col className='p-0 bg-secondary d-flex align-items-center justify-content-center'>  
          <h3 className='m-0 text-break lh-1' style={title.length > 18 ? longTitle : null} >{title}</h3>
        </Col>
      </Row>
    )
  })
  
  return (
    <Container fluid className='h-100 p-0 d-flex flex-column justify-content-around'>
      {titleDivs}      
    </Container>
  )
}

export default function ProjectsCarrousel({projects}) {

  const [titles, setTitles] = useState([projects[scrollLevel].title, projects[scrollLevel+1].title]);

  const proCont = React.createRef();
  let projectsContainer;

  useEffect(() => {
    projectsContainer = proCont.current;
    projectsContainer.addEventListener("wheel", e => e.preventDefault());
  })

  const ScrollUp = () => {
    if (scrollLevel > 0){
      scrollLevel--;
      projectsContainer.scrollBy(0, -200);
      setTitles([projects[scrollLevel].title, projects[scrollLevel+1].title]);
    }
  }
  
  const ScrollDown = () => {
    if (scrollLevel < projects.length-2){
      scrollLevel++;
      projectsContainer.scrollBy(0, 200);
      setTitles([projects[scrollLevel].title, projects[scrollLevel+1].title]);
    }
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center' key={pos}>
        <button className='w-100 bg-white bg-opacity-25 border-0 rounded-4 d-flex justify-content-center'>
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
      <Row className='h-75 w-100 m-0'>
        <Col xs="6" className='p-0'>
          {ProjectsTitles(titles)}
        </Col>
        <Col xs="6" className='p-0 h-100'>
          <div id='projects-container' className='h-100 w-100' ref={proCont}>
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
