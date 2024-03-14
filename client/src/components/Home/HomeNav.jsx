import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeNav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Cursos">
          Cursos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Cursos">
          Clases Individuales
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Iniciar sesión</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Dashboard</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Profile</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default HomeNav;