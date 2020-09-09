import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className='home'>
    <div className='home-content'>
      <h1 className='home__main-heading'>Hello, I'm Jaymes</h1>
      <h2 className='home__sub-heading'>I'm a Full-stack Web Developer</h2>

      <p className='home__text'>Front-end and back-end developer</p>
      <p className='home__text'>based in Rhode Island</p>
      <p className='home__text'>who focusing on</p>
      <p className='home__text'>writing nice and</p>
      <p className='home__text'>clean codes.</p>
      <Link className='home__link' to='/contact'>
        Contact Me
      </Link>
    </div>
  </div>
);

export default Home;
