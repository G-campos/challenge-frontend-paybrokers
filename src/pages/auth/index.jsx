import {
  Col,
  Container,
  Row
} from "react-bootstrap";

import FormLogin from "../../components/formLogin";

export default function AuthPage() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 5, offset: 4 }} style={{ paddingTop: '8rem' }}>
          <FormLogin />
        </Col>
      </Row>
    </Container>
  );
}