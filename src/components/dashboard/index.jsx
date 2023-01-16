import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container className="">
      <Row>
        <Col>
          <Card className="" style={{ width:'20rem'}}>
            <Card.Header>
              Principais produtos vendidos
            </Card.Header>
            <Card.Body>
              <span>grafico aqui</span>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="" style={{ width:'20rem'}}>
            <Card.Header>
              Movimentações
            </Card.Header>
            <Card.Body>
              <span>Lista aqui</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;