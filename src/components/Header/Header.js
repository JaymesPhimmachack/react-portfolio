import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return { show: !state.show };
    });
  };

  render() {
    return (
      <header className='header'>
        <nav className='navbar'>
          <Link className='header__brand' to='/'>
            Jaymes Phimmachack
          </Link>
          <button onClick={this.handleClick} className='navbar__nav-toggler'>
            <i class='fas fa-bars navbar__nav-toggler-icon'></i>
          </button>
          <div className={`navbar__nav ${this.state.show ? "show" : ""}`}>
            <ul className='navbar__nav-list'>
              <li className='navbar__nav-item'>
                <Link className='navbar__nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='navbar__nav-item'>
                <Link className='navbar__nav-link' to='/about-me'>
                  About Me
                </Link>
              </li>
              <li className='navbar__nav-item'>
                <Link className='navbar__nav-link' to='/projects'>
                  Projects
                </Link>
              </li>
              <li className='navbar__nav-item'>
                <Link className='navbar__nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
