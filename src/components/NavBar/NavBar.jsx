import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BWPic</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#wallpaper" className='nav-link-fondos'>Fondos</Nav.Link>
              <Nav.Link href="#landscape" className='nav-link-paisajes'>Paisajes</Nav.Link>
              <Nav.Link href="#character" className='nav-link-personajes'>Personajes</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#cart">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
