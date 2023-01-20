import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {
  Button,
  Form,
  InputGroup,
  Modal
} from "react-bootstrap";

function ModalEditProducts(props) {
  const [inputText, setInputText] = useState({
    name: "",
    valueMoney: "",
    group: ""
  },);

  const groupProduct = ["Demanda Interna", "Demanda Externa", "Outros"]

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputText((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });

  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onShow={() => setInputText(props.product)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2" controlId="formProductName">
            <Form.Label>Nome do produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do produto"
              value={inputText.name}
              onChange={inputEvent}
              name="nome"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductValue">
            <Form.Label>Valor do produto</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                value={inputText.valueMoney}
                onChange={inputEvent}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductValue">
            <Form.Label>Grupo do produto</Form.Label>
            <Form.Select
              aria-label="Selecione um grupo"
              value={inputText.group}
              onChange={inputEvent}
            >
              { groupProduct.map(
                (value, index) => (
                  <option value={value}>{value}</option>
                )
              )}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          onClick={() => props.actionOne({
            id: inputText.id,
            name: inputText.name,
            valueMoney: inputText.valueMoney,
            group: inputText.group
          })}
          style={{background: '#1E7F7A'}}
        >
          {props.actionOneText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditProducts;