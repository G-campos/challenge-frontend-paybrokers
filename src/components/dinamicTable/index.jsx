import {
  Button,
  OverlayTrigger,
  Table,
  Tooltip
} from "react-bootstrap";

function handlerBody(obj, objName) {
  let arryTDList = []
  for (const property in obj) {
    arryTDList.push(obj[property])
  }
  return (
    arryTDList.map(
      (value, index) => (
        <th key={index}>{ value }</th>
      )
    )
  )
}

function DinamicTable(props) {
  return (
    <Table responsive className="pt-3">
      <thead>
      <tr>
        { props.header.map(
          (value, index) => (
            <th key={index}>{ value }</th>
          )
        )}
      </tr>
      </thead>
      <tbody>
      { props.body.map((item) => (
        <tr>
          { handlerBody(item, 'item') }
          <td key="">
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