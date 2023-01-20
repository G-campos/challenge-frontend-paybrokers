import {
  Card,
  Col,
  Container, Row

} from "react-bootstrap";

import { GraphDoughnut, GraphLine,} from "../graph";
import DinamicTable from "../dinamicTable";
import DinamicList from "../list";

function Dashboard(props) {
  const tableHeader = ['ID', 'NOME', 'EMPRESA', 'TIPO PEDIDO', 'SETOR', 'PERMISSÃO', 'AÇÃO']

  return (
    <Container className="">
      <Row>
        <Col>
          <Card className=""  style={{ width:'16rem'}}>
            <Card.Header>
              Principais produtos vendidos
            </Card.Header>
            <Card.Body>
              <GraphDoughnut />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="" style={{ width:'20rem'}}>
            <Card.Header>
              Últimas movimentações
            </Card.Header>
            <Card.Body>
              <DinamicList
                movimentation={props.dataList}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=""  style={{ width:'30rem'}}>
            <Card.Header>
              Fluxo de vendas
            </Card.Header>
            <Card.Body>
              <GraphLine/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row className="pb-5">
        <Col>
          <Card className="">
            <Card.Header>
              Tickets em aberto
            </Card.Header>
            <Card.Body>
              <DinamicTable
                header={tableHeader}
                body={props.dataTable}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Dashboard;