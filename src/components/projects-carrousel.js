import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown , faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Style from '../sass/project-carrousel.module.scss'
import DiamondIcon from './diamond-icon'
import Stack from 'react-bootstrap/Stack'

let scrollLevel = 0;

function ProjectsTitles(titles) {
  
  const titleDivs = titles.map((title, pos) => {
    
    const longTitle = {
      fontSize: '21px'
    }

    return (
      <Row className={`p-0 text-center d-flex m-0 ${Style.projectTitle}`} key={pos}>
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

function ProjectModal(show, project, close) {
  
  const url = project.hasOwnProperty('url') ? <DiamondIcon icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x" transform={{rotate: -45}} />} size={'50px'} url={project.url}/> : null;

  return (
    <Modal show={show} onHide={close} dialogClassName={`${Style.modal} vh-100 my-0`} contentClassName={Style.modalContent} centered>
      <Modal.Header closeButton closeVariant='white'>
    	  <div>
          <h3 className='m-0 pt-1 lh-1 text-white'>{project.title}</h3>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Row className='m-0 w-100 flex-nowrap'>
          <Col xs="auto d-flex justify-content-center bg-white bg-opacity-25 p-0 rounded">
            <Image fluid src={project.img} rounded/>
          </Col>
          <Col xs="auto d-flex">
            <p className='my-auto text-white'>{project.description}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center border-0'>
        <Stack direction='horizontal' gap={5}>
          {url}
          <DiamondIcon icon={<FontAwesomeIcon icon={faGithub} size="2x" transform={{rotate: -45}} />} size={'50px'} url={project.repository}/>
        </Stack>
      </Modal.Footer>
    </Modal>
  )
}

export default function ProjectsCarrousel({projects}) {
  
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(projects[0]);
  const [titles, setTitles] = useState([projects[scrollLevel].title, projects[scrollLevel+1].title]);

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

  const HandleShowModal = (project) => {
    setShowModal(true);
    setModalProject(project);
  }
  
  const HandleCloseModal = () => {
    setShowModal(false);
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center' key={pos}>
        <button className='w-100 bg-white bg-opacity-25 border-0 rounded-4 d-flex justify-content-center' onClick={() => HandleShowModal(project)}>
          <img src={project.img} className="h-100"/> 
        </button>
      </div>
    )
  })
  
  return (
    <Container fluid className="p-0 d-flex flex-column h-100 justify-content-center">
      {ProjectModal(showModal, modalProject, HandleCloseModal)}
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
