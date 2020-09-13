import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ image, name, description, website, github }) => (
  <div className='project'>
    <div className='project__image-container'>
      <img className='project__image' src={image} alt={name} />
    </div>
    <div className='project__detail'>
      <p className='project__title'>
        {name}
        <Link className='project__link' to={website}>
          <i className='fas fa-globe'></i>
        </Link>
        <Link className='project__link' to={github}>
          <i className='fab fa-github'></i>
        </Link>
      </p>
      <p className='project__desc'>{description}</p>
    </div>
  </div>
);

export default Project;
