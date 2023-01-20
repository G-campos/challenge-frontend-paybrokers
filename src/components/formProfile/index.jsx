import {
  useEffect,
  useState
} from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";

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
import {style} from "./style"

function FormProfile() {
  let navigate = useNavigate();

  const [inputText, setinputText] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [warnName, setWarnName] = useState(false);
  const [warnEmail, setWarnEmail] = useState(false);
  const [warnPassword, setWarnPassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    setinputText(JSON.parse(sessionStorage.getItem('USER')))
  }, []);

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
    setWarnName(false);
    setWarnEmail(false);
    setWarnPassword(false);
    if (inputText.name === "") {
      console.log("if")
      setWarnName(true);
    }else if (inputText.email === "") {
      console.log("if")
      setWarnEmail(true);
    } else if (inputText.password === "") {
      console.log("else if")
      setWarnPassword(true);
    } else {
      console.log("else")
      await updateUser()
    }
  }

  async function updateUser() {
    const payload = {
      id: inputText.id,
      name: inputText.name,
      email: inputText.email,
      password: inputText.password
    }
    await http.put("/user", payload)
      .then((res) => {
        console.log('resp.data => ', res.data)
        sessionStorage.setItem('USER', JSON.stringify(res.data))
        navigate('/home')
      })
      .catch((err) => {
        console.log(err)
        alert("ops! ocorreu um erro, " + err);
      });
  }

  return (
    <Form onSubmit={authUser} style={{width: '20rem'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          className={` ${warnEmail ? "warning" : "" }`}
          placeholder="Enter your name"
          value={inputText.name}
          onChange={inputEvent}
          name="name"
        />
      </Form.Group>

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
        <Button
          type={"button"}
          style={style.saveButton}
        >
          Salvar
        </Button>
        <Button
          type={"button"}
          style={style.deleteButton}
        >
          Excluir
        </Button>
      </Form.Group>
    </Form>
  );
}

export default FormProfile;
