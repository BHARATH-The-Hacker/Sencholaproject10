import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
<Navbar expand="lg" className="bg-body-tertiary fw-bold fixed-top">
        <Container>
          <Navbar.Brand  href="/"><h2>
            <i class="bi bi-palette-fill"></i> Color's Paradise</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link  href="/"><i class="bi bi-house-door-fill"></i> Home</Nav.Link>
               <Nav.Link  href="/Gallery"><i class="bi bi-brush-fill"></i> Color-Picker</Nav.Link> 
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header