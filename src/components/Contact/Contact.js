import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className='contact'>
    <h3 className='contact__main-heading'>Contact Me</h3>
    <h4 className='contact__sub-heading'>Let's chat!</h4>

    <p className='contact__text'>
      Reach out for a project or just to say hello!
    </p>
    <form class='form' action=''>
      <input class='form__input' type='text' placeholder='Full Name' />
      <input class='form__input' type='text' placeholder='Email' />
      <textarea
        class='form__textarea'
        name='message'
        id=''
        cols='30'
        rows='10'
        value='Hello...'
      ></textarea>
      <button className='form__button'>Send Message</button>
    </form>
  </div>
);

export default Contact;
