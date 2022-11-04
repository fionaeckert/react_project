import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Greenspace 💚</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Greta 💬</Nav.Link>
            <Nav.Link href="/clinics">Clinics 🩺</Nav.Link>
            <Nav.Link href="/providers">Providers 📝</Nav.Link>
            <Nav.Link href="/resources">Resources 📚</Nav.Link>
            <Nav.Link href="/vibes">Good Vibes 🐶</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;