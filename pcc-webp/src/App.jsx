/*
  File: App.jsx
  Description: Main application. Uses react-scroll to navigate.
  Author: Kendrick Tan
*/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="product">
        <Product />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
