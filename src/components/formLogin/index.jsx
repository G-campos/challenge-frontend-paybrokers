import {
  Card,
  Button,
  Form
} from "react-bootstrap";

function FormLogin() {
  const authUser = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="mb-2" style={{ width:'18rem' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={authUser}>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>

  );
}

export default FormLogin;