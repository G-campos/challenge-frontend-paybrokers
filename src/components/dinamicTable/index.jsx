import {
  Button,
  OverlayTrigger,
  Table,
  Tooltip
} from "react-bootstrap";

function DinamicTable() {
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
  return (
    <Table responsive className="pt-3">
      <thead>
      <tr>
        {tableHeader.map((value, index) => (
          <th key={index}>{ value }</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {tableBody.map((order) => (
        <tr>
          <td>{ order.id }</td>
          <td>{ order.name }</td>
          <td>{ order.company }</td>
          <td>{ order.requestType }</td>
          <td>{ order.sector }</td>
          <td>{ order.permission }</td>
          <td>
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip id="tooltip-disabled">Atender</Tooltip>
              }
            >
              <Button variant="outline-light">
                <i
                  className="mdi mdi-tag-check text-secondary"
                  aria-hidden="true"
                  style={{fontSize:20+'px'}}
                />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="tooltip-disabled">Indeferir</Tooltip>
              }
            >
              <Button variant="outline-light">
                <i
                  className="mdi mdi-tag-remove text-danger"
                  aria-hidden="true"
                  style={{fontSize:20+'px'}}
                />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

export default DinamicTable;