import React from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import DinamicTable from "../../components/dinamicTable/index.jsx";
import {Container} from "react-bootstrap";

export default function ProductsPage() {
  if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )
  const tableHeader = ['ID', 'NOME', 'VALOR', 'GRUPO', 'AÇÃO']
  const tableBody = [
    {
      id: 1,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
    {
      id: 2,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
    {
      id: 3,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
    {
      id: 4,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
    {
      id: 5,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
    {
      id: 6,
      name: "Caixa de papel",
      valueMoney: "5000,00",
      group: "Demanda Interna",
    },
  ]
  return (
    <>
      <Navbar/>
      <Container className="pb-5">
        <DinamicTable
          header={tableHeader}
          body={tableBody}
        />
      </Container>
      <Footer/>
    </>
  );
}