/*
  File: App.jsx
  Description: Main application. Uses react-scroll to navigate.
  Author: Kendrick Tan
*/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
        <About />
      </Element>
    </div>
  );
}

export default App;
