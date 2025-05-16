/*
  File: App.jsx
  Description: Main application. Uses react-scroll to navigate.
  Author: Kendrick Tan
*/

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>
    </div>
  );
}

export default App;
