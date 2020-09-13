import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='contact'>
        <h3 className='contact__main-heading'>Contact Me</h3>
        <h4 className='contact__sub-heading'>Let's chat!</h4>

        <p className='contact__text'>
          Reach out for a project or just to say hello!
        </p>
        <form className='form' action=''>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
            className='form__input'
            type='text'
            placeholder='Full Name'
          />
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name='email'
            className='form__input'
            type='text'
            placeholder='Email'
          />
          <textarea
            onChange={this.handleChange}
            className='form__textarea'
            name='message'
            id=''
            cols='30'
            rows='10'
            value={this.state.message}
            placeholder='Hello...'
          ></textarea>
          <button className='form__button'>Send Message</button>
        </form>
      </div>
    );
  }
}

export default Contact;
