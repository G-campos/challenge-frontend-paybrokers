import {
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { style } from "./style.js";

import { GraphDoughnut, GraphLine,} from "../graph";
import DinamicTable from "../dinamicTable";
import DinamicList from "../list";

function Dashboard(props) {
  const tableHeader = ['ID', 'NOME', 'EMPRESA', 'TIPO PEDIDO', 'SETOR', 'PERMISSÃO', 'AÇÃO']

  return (
    <Container className="">
      <Row>
        <Col>
          <Card className=""  style={style.cardProducts}>
            <Card.Header>
              Principais produtos vendidos
            </Card.Header>
            <Card.Body>
              <GraphDoughnut />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="" style={style.cardMovimentations}>
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
          <Card className=""  style={style.cardGraphSales}>
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