import React from "react";
import {Navigate} from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Dashboard from "../../components/dashboard";

export default function HomePage() {
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