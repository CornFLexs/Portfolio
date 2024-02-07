import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState ,useEffect} from 'react';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, seScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY > 50) {
            seScrolled(true)
        }else{
            seScrolled(false)
        }
    }

    window.addEventListener("scroll",onScroll)

    return () => window.removeEventListener("scroll",onScroll)
  },[])

  const onUpdateActiveLink = (vaule) =>{
    setActiveLink(vaule)
  }

  return (
    <Navbar expand="lg" className={scolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
