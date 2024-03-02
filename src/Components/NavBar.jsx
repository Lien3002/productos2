import React from "react";
import SingIn from "./Modal/SingIn.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SingUp from "./Modal/SingUp.jsx";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark-tertiary" >
      <Container >
        <Navbar.Brand href="#home">De Segunda Casi Nuevo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/prod1">Link</Nav.Link>
            <Nav.Link href="#link"><SingIn /></Nav.Link>
            <Nav.Link href="#link"><SingUp /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
