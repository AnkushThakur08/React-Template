import React from "react";

import NavBar from "./NavBar";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import Scroll from "./Scroll";

import "./style.css";

const App = () => {
  return (
    <div>
      <Scroll />
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default App;
