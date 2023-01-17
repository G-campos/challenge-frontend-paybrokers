import {
  Link,
  useNavigate
} from "react-router-dom";
import {
  useState
} from "react";

import http from "../../services/axios";

import {
  Card,
  Button,
  Form,
  Row,
  Col,
  Container,
  InputGroup
} from "react-bootstrap";

function FormLogin() {
  let navigate = useNavigate();

  const [inputText, setinputText] = useState({
    email: "",
    password: ""
  });

  const [warnEmail, setWarnEmail] = useState(false);
  const [warnPassword, setWarnPassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const [user, setUser] = useState();

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputText((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });

  }

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  }

  const authUser = async (e) => {
    console.log("entrou no authUser")
    e.preventDefault();
    setWarnEmail(false);
    setWarnPassword(false);
    if (inputText.email === "") {
      console.log("if")
      setWarnEmail(true);
    } else if (inputText.password === "") {
      console.log("else if")
      setWarnPassword(true);
    } else {
      console.log("else")
      await getAuthUser()
    }
  }

  const getAuthUser = async () => {
    const payload = {
      email: inputText.email,
      password: inputText.password
    }
    await http.post("/login", payload)
      .then((res) => {
        console.log('resp.data => ', res.data)
        sessionStorage.setItem('USER', res.data)
        navigate('/home')
      })
      .catch((err) => {
        console.log(err)
        alert("ops! ocorreu um erro, " + err);
      });
  }

  return (
    <Card className="mb-3" style={{width: '20rem'}}>
      <Card.Header>
        <img
          alt="Paybrokers Icon"
          src="https://www.paybrokers.com.br/uploads/Grupo%2037.png"
          width="250"
          height="50"
          className="d-inline-block align-top"
        />
      </Card.Header>
      <Card.Body>
        <Form onSubmit={authUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className={` ${warnEmail ? "warning" : "" }`}
              placeholder="Enter your email"
              value={inputText.email}
              onChange={inputEvent}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
          </Form.Group>
          <InputGroup className="mb-3">
            <Form.Control
              type={password}
              className={` ${warnPassword ? "warning" : "" } ${type ? "type_password" : "" }`}
              placeholder="Enter your password"
              value={inputText.password}
              onChange={inputEvent}
              name="password"
            />
            <InputGroup.Text>
              <i
                onClick={Eye}
                className={`mdi ${eye ? "mdi-eye-off" : "mdi-eye" }`}
              />
            </InputGroup.Text>
          </InputGroup>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="forgot">
              Forgot your password? <Link to="/pasword-recover">Recover Pwd</Link>
            </Form.Label>
            <Button
              type={"submit"}
              style={{background: '#1E7F7A'}}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>

  );
}

export default FormLogin;
