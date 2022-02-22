import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import HeaderCompA from "./component/HeaderCompA";
import HeaderCompB from "./component/HeaderCompB";
import CardComp3 from "./component/CardComp3";
import CardComp2 from "./component/CardComp2";
import CardComp from "./component/CardComp";
import GridSec1 from "./component/GridSec1.jsx";
import GridSec2 from "./component/GridSec2";
import GridSec3 from "./component/GridSec3";
import FiveCard7 from "./component/FiveCard7";
import CardComp4 from "./component/CardComp4";
import CardComp5 from "./component/CardComp5";
import FourCards6 from "./component/FourCards6";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderCompA />
        <HeaderCompB />
        <Home />
        <CardComp />
        <GridSec1 />
        <CardComp2 />
        <CardComp3 />
        <GridSec2 />
        <GridSec3 />
        <FiveCard7 />
        <CardComp4 />
        <CardComp5 />
        <FourCards6 />
        <Footer />

        <>
          <Routes path="/Home" compnonent={Home} />
        </>
      </div>
    </Router>
  );
}

export default App;
