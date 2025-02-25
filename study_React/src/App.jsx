import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-header w-100">
      <Navbar />
      <Header />
      <div className="container-fluid mt-5">
        <About />
        <Skills />
        <Projects />
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;