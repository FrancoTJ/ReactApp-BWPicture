import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../utils/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  const { cartCountItems } = useContext(CartContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="text-light"
    >
      <Container>
        <NavLink to="/" className="nav-link">
          <Navbar.Brand to="/">BWPic</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/category/nature" className="nav-link nav-link-nature">
              {/* <NavLink to="/category"  className={({isActive}) => isActive ? 'text-light nav-link-nature' : 'text-danger nav-link-nature'} > */}
              Nature
            </NavLink>
            <NavLink to="/category/gaming" className="nav-link nav-link-gaming">
              Gaming
            </NavLink>
            <NavLink to="/category/movies" className="nav-link nav-link-movies">
              Movies
            </NavLink>
          </Nav>
          {cartCountItems() > 0 && (
            <Nav>
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            </Nav>
           )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
