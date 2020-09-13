import React from "react";
import "./Education.css";

const Education = ({
  year,
  location,
  school,
  fieldOfStudy,
  descriptionList,
}) => (
  <div key={fieldOfStudy} className='education'>
    <div className='education__time'>
      <p>{year}</p>
      <p>{location}</p>
    </div>
    <div className='education__school'>
      <p>{school}</p>
      <p>{fieldOfStudy}</p>
    </div>
    <div className='education__desc'>
      <ul>
        {descriptionList.map((description, index) => (
          <li className='education__desc-item' key={index}>
            {description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Education;
