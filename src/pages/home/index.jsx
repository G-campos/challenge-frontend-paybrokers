import React from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Dashboard from "../../components/dashboard";

export default function HomePage() {
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