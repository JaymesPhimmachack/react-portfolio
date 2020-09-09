import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about-me' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
