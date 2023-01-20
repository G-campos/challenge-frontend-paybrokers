import {
  Button,
  Container, Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import {
  useNavigate,
  Navigate,
  Link
} from "react-router-dom";
import {style} from "./style.js";

function NavBar(props) {
  let navigate = useNavigate();

  const logout = () => {
    sessionStorage.setItem('USER', '')
    navigate('/')
  }

  const goToProfile = () => {
    navigate('/profile')
  }
  const goToSettings = () => {
    navigate('/settings')
  }

  return (
    <Navbar
      expand="lg"
    >
      <Container>
        <Navbar.Brand href={'/home'}>
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
            <Nav.Link className="" href={'/home'}>Home</Nav.Link>
            <Nav.Link className="" href={'/products'}>Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className="">
            <NavDropdown title={ props.user.name } id="basic-nav-dropdown">
              <NavDropdown.Item onClick={goToProfile}>
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Item onClick={goToSettings}>
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                <i
                  className="mdi mdi-location-exit text-danger"
                  aria-hidden="true"
                  style={ style.iconStyle }
                />{' '}
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Navbar.Brand className="">
            <i
              className="mdi mdi-account"
              aria-hidden="true"
              style={{ fontSize:30+'px', color: '#5CC4BD'}}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;