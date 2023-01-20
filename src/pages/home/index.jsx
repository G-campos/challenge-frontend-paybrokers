import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import http from "../../services/axios";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Dashboard from "../../components/dashboard";

export default function HomePage() {
  if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )

  const [user, setUser] = useState({});
  const [movimentations, setMovimentations] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('USER')))
    getDataMovimentations()
    getDataOrders()
  }, []);

  async function getDataMovimentations() {
    http.get('/movimentations')
      .then(({ data }) => {
        setMovimentations(data)
      })
      .catch(e => console.error('getDataMovimentations err => ', e))
  }

  async function getDataOrders() {
    http.get('/orders')
      .then(({ data }) => {
        console.log("orders =>", data)
        setOrders(data)
      })
      .catch(e => console.error('getDataOrders err => ', e))
  }

  return (
    <>
      <Navbar user={user} />
      <Dashboard
        dataList={movimentations}
        dataTable={orders}
      />
      <Footer/>
    </>
  );
}