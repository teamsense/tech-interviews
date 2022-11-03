import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const DemoNavbar = () => {
  return (
    <Navbar
      className="px-3 px-md-5"
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          People <span className="text-muted">Finder</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home" active>
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
