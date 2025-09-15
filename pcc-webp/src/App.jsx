/*
  File: App.jsx
  Description: Main application. Uses react-scroll to navigate.
  Author: Kendrick Tan
*/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Element } from "react-scroll";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
        <About />
        <Product />
      </Element>
    </div>
  );
}

export default App;
