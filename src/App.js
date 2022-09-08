import './sass/App.scss';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import {ContactTitle, ProjectsTitle, MainTitle} from './components/section-titles';
import DiamondIcon from './components/diamond-icon';
import ProjectsCarrousel from './components/projects-carrousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  
  const [currentSec, setCurrentSec] = useState('about')
  
  const projects = [
    {
      title: 'Fitness Calculator',
      img: './projects/fit-calc.png',
      description: 'Web app where you can calculate your BFP (Body fat percentage), your ideal weight (Work in progress) and your DCR (Daily calory requirement - Work in progress)',
      technologies: ['SASS', 'Fitness Calculator API', 'Bootstrap'],
      url: 'https://maxg02.github.io/Fitness-Calculator/',
      repository: 'https://github.com/maxg02/Fitness-Calculator'
    },
    {
      title: 'W3schools Homepage Clone',
      img: './projects/w3sch-clone.png',
      description: 'A frontend\'s clone of the W3school\'s homepage',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      url: 'https://maxg02.github.io/W3school-Homepage-Clone/',
      repository: 'https://github.com/maxg02/W3school-Homepage-Clone'
    },
    {
      title: 'Python AddressBook',
      img: './projects/py-addrbook.png',
      description: 'An android-like Address Book made with Python',
      technologies: ['Python', 'Tkinter', 'SQLite'],
      repository: 'https://github.com/maxg02/GUI-AddressBook-Python'
    },
  ]

  const contact = [
    {
      icon: faEnvelope,
      url: 'mailto:maxdanielgs@hotmail.com'
    },
    {
      icon: faGithub,
      url: 'https://github.com/maxg02'
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/max-daniel-garcia-sanchez-b9658a224/'
    },
  ]

  const contactIcons = contact.map((contact, pos)=>{
    return (
      <DiamondIcon animated icon={<FontAwesomeIcon icon={contact.icon} size="3x" transform={{rotate: -45}}/>} key={pos} url={contact.url} size='140px'/>
    )
  })

  useEffect(() => {
    const appDiv = document.getElementsByClassName('App')[0];
    const projectsPos = document.getElementById('projects').offsetTop
    const contactPos = document.getElementById('contact').offsetTop

    appDiv.addEventListener('scroll', () => {
      switch(appDiv.scrollTop){
        case 0:
          setCurrentSec('about');
          break;
        case projectsPos:
          setCurrentSec('projects');
          break;
        case contactPos:
          setCurrentSec('contact');
          break;
        default:
          break;
      }  
    })
  })
  
  return (
    <div className="App bg-primary position-relative">
      <Stack id='nav' className='position-fixed d-none d-lg-flex' gap={4}>
        <DiamondIcon active={currentSec === 'about' ? true : false} local icon={<FontAwesomeIcon icon={faUser} size='1x' transform={{rotate: -45}}/>} url='#about' size='33px'/>
        <DiamondIcon active={currentSec === 'projects' ? true : false} local icon={<FontAwesomeIcon icon={faBriefcase} size='1x' transform={{rotate: -45}}/>} url='#projects' size='33px'/>
        <DiamondIcon active={currentSec === 'contact' ? true : false} local icon={<FontAwesomeIcon icon={faEnvelope} size='1x' transform={{rotate: -45}}/>} url='#contact' size='33px'/>
      </Stack>
      <section id='about' className='vh-100 d-flex flex-column pt-5 pb-5 overflow-hidden'>
        <MainTitle/>
        <Container fluid className='flex-grow-1 overflow-hidden'>
          <Row className='h-100 justify-content-evenly m-0'>
            <Col md={{order:1,span:5}} id='mainSectionInfo' className='order-2 col-12 d-flex align-items-center justify-content-center flex-column h-50 h-md-100'>
                <div className='d-flex w-100 mb-3 align-items-center'>
                  <Image src='./title-ends/title-end-left.png' className='h-100'/>
                  <div className='flex-grow-1 bg-secondary h-100 d-flex'>
                    <h3 className='m-0 text-center m-auto'>Front-end developer</h3>
                  </div>
                  <Image src='./title-ends/title-end-right.png' className='h-100'/>
                </div>
                <p className='text-white m-0'>Computer enthusiast based in Dominican Republic. Focused on web development especially front-end.</p>
            </Col>
            <Col md={{order:2}} id='profile-img-frame' className='order-1 col-auto p-0 h-md-100 h-50'>
              <Image src="./profile-frame.svg" alt="Profile-frame"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='projects' className='vh-100 d-flex flex-column py-md-5 py-3'>
        <ProjectsTitle/>
        <Row className='m-0 p-0 flex-grow-1 overflow-hidden'>
          <Col md={{span:8}} className='m-0 col-12 px-0 h-100' id='projCarrouselContainer'>
            <ProjectsCarrousel projects={projects}/>
          </Col>
        </Row>
      </section>
      <section id='contact' className='vh-100 py-5 d-flex flex-column position-relative'>
        <Container fluid className='h-75 p-0 mt-auto d-flex flex-column'>
            <Stack direction='horizontal' gap={6} className='mb-auto d-flex justify-content-center'>
              {contactIcons}
            </Stack>
            <ContactTitle/>
        </Container>
      </section>
    </div>
  );
}

export default App;
