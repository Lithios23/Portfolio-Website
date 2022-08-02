import './sass/App.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
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
      technologies: ['JavaScript', 'CSS', 'SASS', 'API', 'Bootstrap', 'HTML']
    },
    {
      title: 'W3schools Homepage Clone',
      img: './projects/w3sch-clone.png',
      description: 'A frontend\'s clone of the W3school\'s homepage',
      technologies: ['JavaScript', 'CSS', 'HTML']
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
      <section className='vh-100 position-relative'>
        <MainTitle/>
        <div className='position-absolute section-title-end d-flex flex-column' style={{transform: 'rotate(180deg)', bottom: 0}}>
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
        <div className='position-absolute section-title-end d-flex flex-column'>
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
