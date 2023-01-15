import {Col, Container, Row} from "react-bootstrap";
import AuthPage from "./pages/auth";

function App() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <AuthPage />
        </Col>
      </Row>
    </Container>

  )
}

export default App
