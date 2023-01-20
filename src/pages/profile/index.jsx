import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FormProfile from "../../components/formProfile";
import {Container} from "react-bootstrap";
import DinamicTable from "../../components/dinamicTable/index.jsx";
import ModalEditProducts from "../../components/modalProducts/index.jsx";

export default function ProfilePage() {
   if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('USER')))
  }, []);

  return (
    <>
      <Navbar user={user}/>
      <Container className="justify-content-center">
        <FormProfile />
      </Container>
      <Footer/>
    </>
  );
}