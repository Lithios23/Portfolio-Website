import './sass/App.scss';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import {ContactTitle, ProjectsTitle, MainTitle} from './components/section-titles';
import DiamondIcon from './components/diamond-icon';
import ProjectsCarousel from './components/projects-carousel';
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
    const projectsPos = document.getElementById('projects').offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY < projectsPos/2) {
        setCurrentSec('about');
      }
      else if (window.scrollY > projectsPos/2 && window.scrollY < projectsPos*1.5) {
        setCurrentSec('projects');
      }
      else {
        setCurrentSec('contact');
      }
    })
  })
  
  return (
    <div className="App bg-primary">
      <Stack id='nav' className='position-fixed d-none d-lg-flex' gap={4}>
        <DiamondIcon active={currentSec === 'about' ? true : false} local icon={<FontAwesomeIcon icon={faUser} size='1x' transform={{rotate: -45}}/>} url='#about' size='33px'/>
        <DiamondIcon active={currentSec === 'projects' ? true : false} local icon={<FontAwesomeIcon icon={faBriefcase} size='1x' transform={{rotate: -45}}/>} url='#projects' size='33px'/>
        <DiamondIcon active={currentSec === 'contact' ? true : false} local icon={<FontAwesomeIcon icon={faEnvelope} size='1x' transform={{rotate: -45}}/>} url='#contact' size='33px'/>
      </Stack>
      <section id='about' className='min-vh-100 d-flex flex-column overflow-hidden'>
        <MainTitle/>
        <Container fluid='xxl' className='d-flex bg-info flex-grow-1 px-3 px-lg-6'>
          <Row className='justify-content-center justify-content-md-between m-0 my-auto align-content-center w-100'>
            <Col md={{order:1,span:7}} id='mainSectionInfo' className='col-12 order-2 d-flex align-items-center justify-content-center flex-column p-0'>
              <h2 className='title m-0 mb-2 text-center w-100'>Front-end developer</h2>
              <p className='text-white m-0'>Computer enthusiast based in Dominican Republic. Focused on web development especially front-end.</p>
            </Col>
            <Col md={{order:2}} id='profile-img-frame' className='mb-3 mb-md-0 col-auto order-1 col-auto p-0'>
              <Image src="./profile-frame.svg" alt="Profile-frame"/>
            </Col>
          </Row>
        </Container>
      </section>      
      <section id='projects' className='min-vh-100 d-flex flex-column'>
        <ProjectsTitle/>
        <Container fluid='xxl' className='px-3 px-lg-6 flex-grow-1 d-flex flex-column'>
          <ProjectsCarousel projects={projects}/>
        </Container>
      </section>
      <section id='contact' className='min-vh-100 d-flex flex-column position-relative'>
        <Container fluid='xxl' className='flex-grow-1 p-0 mt-auto d-flex flex-column px-3 px-lg-6'>
          <Stack direction='horizontal' gap={6} className='my-auto d-flex justify-content-center'>
            {contactIcons}
          </Stack>
        </Container>
        <ContactTitle/>
      </section>
    </div>
  );
}

export default App;
