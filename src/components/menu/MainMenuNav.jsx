import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainMenuNav = () => {
  return (
    <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">ULA CORPORATIVE SOCIETY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Education</Nav.Link>
                    <Nav.Link href="#link">Merchant</Nav.Link>
                    <Nav.Link href="#link">Set up Corporative</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </div>
  )
}

export default MainMenuNav
