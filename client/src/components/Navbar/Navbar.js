import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import logo from '../../assets/logo_marca.png'; // Importa tu imagen de logo aquí

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{ width: "100%" }}>
      <div style={{ display: "flex", width: "40%", justifyContent: "center" }}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/study">Study online</Nav.Link>
            <Nav.Link as={Link} to="/campus">Campus virtual</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;