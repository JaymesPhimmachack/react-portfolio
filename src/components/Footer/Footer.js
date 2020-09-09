import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <p className='footer__text'>&copy; 2020 Jaymes Phimmachack</p>
      <ul className='footer__link-list'>
        <li className='footer__link-item'>
          <Link
            className='footer__link'
            to='https://www.linkedin.com/in/jaymes-phimmachack-b82a58b6/'
          >
            <i class='fab fa-linkedin'></i>
          </Link>
        </li>
        <li className='footer__link-item'>
          <Link className='footer__link' to='https://twitter.com/CodeZero1'>
            <i class='fab fa-twitter-square'></i>
          </Link>
        </li>
        <li className='footer__link-item'>
          <Link
            className='footer__link'
            to='https://github.com/JaymesPhimmachack'
          >
            <i class='fab fa-github-square'></i>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
