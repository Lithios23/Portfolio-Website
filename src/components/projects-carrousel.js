import React, {useEffect, /*useState*/} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { /*faChevronUp , faChevronDown ,*/ faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Image from 'react-bootstrap/Image'
import Style from '../sass/project-carrousel.module.scss'
import Stack from 'react-bootstrap/Stack'
import DiamondIcon from './diamond-icon'

export default function ProjectsCarrousel({projects}) {
  
  //const [visibleProjects, setVisibleProjects] = useState([projects[scrollLevel], projects[scrollLevel+1]]);

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
  }
  
  const ScrollDown = () => {
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <>
      <div className={`${Style.projectCard}`} key={pos}>
        <img className='w-100 h-100' src={project.img}/>
        <Stack direction='horizontal' gap={5} className='d-none justify-content-center w-100 h-100 opacity-0 position-absolute start-0'>
          <DiamondIcon animated icon={<FontAwesomeIcon icon={faGithub} size="3x" transform={{rotate: -45}}/>} url={project.repository} size='80px'/>
          {project.hasOwnProperty('url') ? <DiamondIcon animated icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" transform={{rotate: -45}}/>} url={project.url} size='80px'/> : null}
        </Stack> 
      </div>
      <span className={Style.cardBack}></span>
      </>
    )
  })
  
  return (
    <Container fluid className="py-3 py-md-0 h-100">
      <Row className='w-100 m-0 h-100 flex-column'>
        {/*<Col sm={{span:6,order:1}} className={`col-12 px-0 h-sm-100 h-50 order-2 ${Style.projectInfoContainer}`}>
          {ProjectsInfo(visibleProjects)}
        </Col>*/}
        <Col sm={{span:6,order:2}} className='col-12 p-0 h-sm-100 h-50 order-1 d-flex flex-column'>
          <div className=' h-100 position-relative' id={Style.projectsCardsContainer} ref={proCont}>
            {projectsCards}
          </div>
        </Col>
      </Row> 
    </Container>
  )
}
