import {
  Button,
  Container, Image,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";

function NavBar() {
  const userName = "Campos"
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Paybrokers Icon"
            src="https://www.paybrokers.com.br/uploads/Grupo%2037.png"
            width="160"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="">Home</Nav.Link>
            <Nav.Link className="">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className="">
            <NavDropdown title={ userName } id="basic-nav-dropdown">
              <NavDropdown.Item>
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Item>
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <i
                  className="mdi mdi-location-exit text-danger"
                  aria-hidden="true"
                  style={{fontSize:20+'px'}}
                />{' '}
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Brand className="">
            <i
              className="mdi mdi-account text-info"
              aria-hidden="true"
              style={{fontSize:30+'px'}}
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;