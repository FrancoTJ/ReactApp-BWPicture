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
              <Nav.Link href="#nature" className='nav-link-nature'>Nature</Nav.Link>
              <Nav.Link href="#gaming" className='nav-link-gaming'>Gaming</Nav.Link>
              <Nav.Link href="#movies" className='nav-link-movies'>Movies</Nav.Link>
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
