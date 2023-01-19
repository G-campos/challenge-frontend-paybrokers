import {
  Card,
  Col,
  Container, Row

} from "react-bootstrap";

import { GraphDoughnut, GraphLine,} from "../graph";
import DinamicTable from "../dinamicTable";
import DinamicList from "../list";

function Dashboard() {
  const tableHeader = ['ID', 'NOME', 'EMPRESA', 'TIPO PEDIDO', 'SETOR', 'PERMISSÃO', 'AÇÃO']
  const tableBody = [
    {
      id: 1,
      name: "Fulana de Tal",
      company: "Paybrokers",
      requestType: "Demanda Interna",
      sector: "Comercial",
      permission: "Administrador"
    },
    {
      id: 2,
      name: "Ciclano de Tal",
      company: "Whatever",
      requestType: "Suporte",
      sector: "Financeiro",
      permission: "Operacional"
    },
    {
      id: 3,
      name: "Fulana de Tal",
      company: "Paybrokers",
      requestType: "Demanda Interna",
      sector: "Comercial",
      permission: "Administrador"
    },
    {
      id: 4,
      name: "John Doe",
      company: "AnyBet",
      requestType: "Faturamento",
      sector: "Financeiro",
      permission: "Administrador"
    },
    {
      id: 5,
      name: "Fulana de Tal",
      company: "Paybrokers",
      requestType: "Demanda Interna",
      sector: "Comercial",
      permission: "Administrador"
    },
    {
      id: 6,
      name: "Ciclano de Tal",
      company: "Whatever",
      requestType: "Suporte",
      sector: "Financeiro",
      permission: "Operacional"
    },
    {
      id: 7,
      name: "John Doe",
      company: "AnyBet",
      requestType: "Faturamento",
      sector: "Financeiro",
      permission: "Administrador"
    },
  ]
  const movimentation = [
    {
      type: 'recebido',
      description: 'Pgto de Clientes',
      money: '5000,00'
    },
    {
      type: 'pago',
      description: 'Hospedagem',
      money: '700,00'
    },
    {
      type: 'agendado',
      description: 'Aluguel',
      money: '1000,00'
    },
    {
      type: 'pago',
      description: 'Luz',
      money: '380,00'
    }
  ]

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
                movimentation={movimentation}
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
                body={tableBody}
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