import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComp = () => {
  
  return (
    <Navbar className="navbar-style" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="logo">Skyline Imports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cars">Inventory</Nav.Link>
          <Nav.Link href="/finance">Financing</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://instagram.com/">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://facebook.com/">Facebook</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about">
                Email Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavbarComp;