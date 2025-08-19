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
import SlideBarToggle from "./components/SlideBarToggle";
import TimeLine from "./components/TimeLine";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (  
    <div className="bg-header w-100">
      <ProgressBar duration={2000} height={30}>
      <SlideBarToggle/>
      <Navbar />
      <Header />
      <div className="container-fluid mt-5">
        <About />
        <Skills />
        <Projects />
        <Team />
        <TimeLine/>
      </div>
      <Footer />
    </ProgressBar>
    </div>
  );
}

export default App;