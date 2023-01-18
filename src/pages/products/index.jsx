import React from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Dashboard from "../../components/dashboard";
import Footer from "../../components/footer";

export default function ProductsPage() {
  console.log('productsPage, user =>', !sessionStorage.getItem('USER'))

  if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )
  return (
    <>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </>
  );
}