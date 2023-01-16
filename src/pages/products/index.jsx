import React from "react";

import Navbar from "../../components/navbar";
import Dashboard from "../../components/dashboard";
import Footer from "../../components/footer";

export default function ProductsPage() {
  // const user = false
  //
  // if (!user) {
  //   return redirect("/");
  // }
  return (
    <>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </>
  );
}