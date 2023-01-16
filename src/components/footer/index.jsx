import {
  Col,
  Container,
  Row
} from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="footer navbar-fixed-bottom py-1 py-md-1 mt-1"
      style={{
        background: '#002846',
        position: 'fixed',
        bottom:0,
        width: '100%'
      }}
    >
      <Container className="text-center">
        <Row>
          <Col>
               <span className="text-light">
                Desenvolvidor por Gabriel de Campos
                 {' '}
                 <a
                   href="https://github.com/G-campos"
                   style={{textDecoration:'none'}}
                 >
                  <i
                    className="mdi mdi-github"
                    aria-hidden="true"
                    style={{fontSize:20+'px', color: "white"}}
                  />
                </a>
                 {' '}
                 <a
                   href="https://www.linkedin.com/in/gabriel-de-campos-campos/"
                   style={{textDecoration:'none'}}
                 >
                  <i
                    className="mdi mdi-linkedin"
                    aria-hidden="true"
                    style={{fontSize:20+'px', color: "white"}}
                  />
                </a>
              </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;