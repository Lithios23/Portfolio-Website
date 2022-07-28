import './sass/App.scss';
import SectionTitle from './components/section-title';
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
      <section className='vh-100 bg-success'>
        
      </section>
      <section className='vh-100 bg-info'>
        <ProjectsCarrousel projects={projects}/>
      </section>
      <section className='container-fluid vh-100 p-0 py-5'>
        <div className='row mx-0 h-100 d-flex align-items-end'>
          <div className='d-flex container justify-content-between w-50'>
            {contactIcons}
          </div>
          <div className='px-0'>
            <SectionTitle title='Contact me!'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
