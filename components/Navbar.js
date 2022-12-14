import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComp = () => {
  
  return (
    <Navbar className="navbar-style p-3" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="logo">Skyline Imports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cars">Inventory</Nav.Link>
          <Nav.Link href="/finance">Financing</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://instagram.com/">
              <i className="fa-brands fa-instagram"></i> Instagram
                </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/">
              <i className="fa-brands fa-twitter"></i> Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://facebook.com/">
              <i className="fa-brands fa-facebook"></i> Facebook
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about">
              <i className="fa-solid fa-envelope"></i> Email Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavbarComp;