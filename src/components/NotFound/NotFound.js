import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <div className='notfound'>
    <h1 className='notfound__main-heading'>Ooops!</h1>
    <h3 className='notfound__sub-heading'>
      We can't seem to find the page you're looking for.
    </h3>
    <p className='notfound__text'>Error code: 404</p>
    <p className='notfound__text'>Page not found!</p>
  </div>
);

export default NotFound;
