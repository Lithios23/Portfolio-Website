import './sass/App.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import {ContactTitle, ProjectsTitle, MainTitle} from './components/section-titles';
import ContactIcon from './components/contact-icon';
import ProjectsCarrousel from './components/projects-carrousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const projects = [
    {
      title: 'Fitness Calculator',
      img: './projects/fit-calc.png',
      description: 'Web app where you can calculate your BFP (Body fat percentage), your ideal weight (Work in progress) and your DCR (Daily calory requirement - Work in progress)',
      technologies: ['JavaScript', 'CSS', 'SASS', 'API', 'Bootstrap', 'HTML'],
      url: 'https://maxg02.github.io/Fitness-Calculator/'
    },
    {
      title: 'W3schools Homepage Clone',
      img: './projects/w3sch-clone.png',
      description: 'A frontend\'s clone of the W3school\'s homepage',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      url: 'https://maxg02.github.io/W3school-Homepage-Clone/'
    },
    {
      title: 'Python AddressBook',
      img: './projects/py-addrbook.png',
      description: 'An android-like Address Book made with Python',
      technologies: ['Python', 'Tkinter', 'SQLite']
    },
  ]

  const contact = [
    {
      icon: faEnvelope,
      url: 'mailto:maxdanielgs@hotmail.com'
    },
    {
      icon: faGithub,
      url: 'https://github.com/Lithios23'
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/max-daniel-garcia-sanchez-b9658a224/'
    }
  ]

  const contactIcons = contact.map((contact, pos)=>{
    return (
      <ContactIcon icon={<FontAwesomeIcon icon={contact.icon} size="3x" transform={{rotate: -45}}/>} key={pos} url={contact.url}/>
    )
  })
  
  return (
    <div className="App bg-primary vh-100">
      <section className='vh-100 position-relative d-flex'>
        <MainTitle/>
        <Container fluid className='h-50 mt-auto mb-6'>
          <Row className='h-100 justify-content-evenly'>
            <Col xs='4' className='d-flex align-items-center justify-content-center flex-column'>
              <div className='w-100'>
                <div className='d-flex w-100 mb-4'>
                  <Image src='./title-ends/title-end-left.png' style={{maxHeight: '44px'}}/>
                  <h3 className='bg-secondary m-0 pt-1 text-center flex-grow-1' style={{fontSize: '33px'}}>Front-end developer</h3>
                  <Image src='./title-ends/title-end-right.png' style={{maxHeight: '44px'}}/>
                </div>
                <p align='justify' className='text-white'>Computer enthusiast based in Dominican Republic. Focused on web development especially front-end.</p>
              </div>
            </Col>
            <Col xs='auto' className='h-100 d-flex'>
              <Image roundedCircle src="./profile-img.jpg" alt="Profile-img" className='mx-auto h-100 border border-5 border-secondary'/>
            </Col>
          </Row>
        </Container>
        <div className='position-absolute projects-title-end d-flex flex-column' style={{transform: 'rotate(180deg)', bottom: 0}}>
          <span className='bg-secondary'></span>
          <img src="./title-ends/title-end-down.png"/>
        </div>
      </section>
      <section className='vh-100'>
        <Row className='vh-100 position-relative w-100 m-0'>
          <ProjectsTitle/>
          <Col xs={{span:8, offset:3}} className='px-0 h-100'>
            <ProjectsCarrousel projects={projects}/>
          </Col>
        </Row>
      </section>
      <section className='vh-100 py-5 d-flex flex-column position-relative'>
        <div className='position-absolute projects-title-end d-flex flex-column' style={{top: 0}}>
          <span className='bg-secondary'></span>
          <img src="./title-ends/title-end-down.png"/>
        </div>
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
