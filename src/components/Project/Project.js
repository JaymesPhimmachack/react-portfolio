import React from "react";
import { Link } from "react-router-dom";
import { DiGithubBadge, DiFirefox } from "react-icons/di";
import "./Project.css";

const Project = ({ image, name, descriptions, website, github }) => (
  <div className='project'>
    <div className='project__image-container'>
      <img className='project__image' src={image} alt={name} />
    </div>
    <div className='project__detail'>
      <div className='project__title'>
        <div>{name}</div>
        <div>
          <Link className='project__link' to={website}>
            < DiFirefox className="icon-link firefox" />
          </Link>
          <Link className='project__link' to={github}>
            < DiGithubBadge className="icon-link github" />
          </Link>
        </div>
      </div>
      <ul className='project__desc'>{
        descriptions.map((description, index) => <li key={index}>{description}</li>)
      }</ul>
    </div>
  </div>
);

export default Project;
