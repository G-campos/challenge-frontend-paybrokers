import React from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function SettingsPage() {
  if (!sessionStorage.getItem('USER')) return (
    <Navigate to="/" replace={true} />
  )
  return (
    <>
      <Navbar/>
      {/* settings dashboard*/}
      <Footer/>
    </>
  );
}