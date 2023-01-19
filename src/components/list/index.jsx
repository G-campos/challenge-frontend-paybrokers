import {
  ListGroup,
} from "react-bootstrap";

const operationType = {
  recebido: {
    icon: 'mdi mdi-arrow-down-bold-hexagon-outline',
    color: 'green'
  },
  pago: {
    icon: 'mdi mdi-arrow-up-bold-hexagon-outline',
    color: 'red'
  },
  agendado: {
    icon: 'mdi mdi-arrow-right-bold-hexagon-outline',
    color: 'darkcyan'
  },
}

function DinamicList(props) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
      >
        <div>
          <i
            className="mdi mdi-arrow-down-bold-hexagon-outline"
            aria-hidden="true"
            style={{fontSize:18+'px', color: "green"}}
          />{' '}
          <span>recebido</span>
        </div>
        <div>
          <i
            className="mdi mdi-arrow-up-bold-hexagon-outline"
            aria-hidden="true"
            style={{fontSize:18+'px', color: "red"}}
          />{' '}
          <span>pago</span>
        </div>
        <div>
          <i
            className="mdi mdi-arrow-right-bold-hexagon-outline"
            aria-hidden="true"
            style={{fontSize:18+'px', color: "darkcyan"}}
          />{' '}
          <span>agendado</span>
        </div>
      </ListGroup.Item>
      {props.movimentation.map((operation) => (
        <ListGroup.Item
          className="d-flex justify-content-between align-items-start"
        >
          <i
            className={operationType[operation.type].icon}
            aria-hidden="true"
            style={{fontSize:18+'px', color: operationType[operation.type].color}}
          />
          <span className="ms-2 me-auto">
            {operation.description}
          </span>
          <span>R$ {operation.money}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default DinamicList;