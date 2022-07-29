import './sass/App.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import {ContactTitle, ProjectsTitle} from './components/section-titles';
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
      <section className='vh-100'>
        
      </section>
      <section className='vh-100'>
        <Row className='h-100'>
          <Col xs={{span: 7}} className='h-100 d-flex align-items-center position-relative'>
            <ProjectsTitle/>
          </Col>
          <Col xs={{span: 4}} className='h-100 py-5'>
            <ProjectsCarrousel projects={projects}/>
          </Col>
        </Row>
      </section>
      <section className='vh-100 py-5 d-flex flex-column'>
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
