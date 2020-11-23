import React, { Component } from "react";
import { Link } from "react-router-dom";
import Education from "../Education/Education";
import "./AboutMe.css";
import profilePic from "../../img/profile_pic.png";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          year: "2020",
          location: "Remote, US",
          school: "OpenClassRooms",
          fieldOfStudy: "Full-stack Web Developer",
          descriptionList: [
            "Create web projects with JavaScript",
            "Use React, a popular JavaScript library",
            "Integrate a web page from a graphical mockup in HTML5, CSS3, and Sass",
            "Create Ruby on Rails applications",
            "Integrate React with Ruby on Rails",
            "Query a database that uses and stores information",
            "Deploy a website online",
            "Implement unit and integration tests",
            "Design technical architecture using UML diagrams",
          ],
        },
        {
          year: "2006 - 2008",
          location: "Lincoln, RI",
          school: "Bryant University",
          fieldOfStudy: "Computer Information Systems",
          descriptionList: [
            "Learn to define problems, develop systems, construct applications, and program to excel in a wide range of professional opportunities.",
            "Acquire critical knowledge of information systems to develop technical solutions to corporate challenges.",
            "Immerse yourself in a faculty-supervised directed study where you conduct independent, in-depth research.",
            "Collaborate with faculty on research through the Advanced Applied Analytics Center, a regional analytics beacon.",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className='about-me'>
        <h3 className='about-me__heading'>About me</h3>
        <div className='about-me__detail'>
          <img
            className='about-me__profile-image'
            src={profilePic}
            alt='profile pic'
          />
          <div className='about-me__story'>
            <p className='about-me__title'>Small story about me</p>
            <p className='about-me__text'>
              I love working with computers, so I studied Computer Information
              Systems in college. However, after I graduated, I end up working
              in a different field. After looking for ways to enter the field
              that I love, I found some video courses and books online, which
              sparked my interest. I started to learn web development on my own
              with these resources until I hit a roadblock in my learning, which
              lead me to OpenClassRooms. At OpenClassRooms, I was able to learn
              many things, which I list in my education history, which has
              helped me gain the confidence to become a great developer.
            </p>
            <ul className='about-me__link-list'>
              <li className='about-me__link-item'>
                <Link
                  className='about-me__link'
                  to='https://www.linkedin.com/in/jaymes-phimmachack-b82a58b6/'
                >
                  <i className='fab fa-linkedin'></i>
                </Link>
              </li>
              <li className='about-me__link-item'>
                <Link
                  className='about-me__link'
                  to='https://twitter.com/CodeZero1'
                >
                  <i className='fab fa-twitter-square'></i>
                </Link>
              </li>
              <li className='about-me__link-item'>
                <Link
                  className='about-me__link'
                  to='https://github.com/JaymesPhimmachack'
                >
                  <i className='fab fa-github-square'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='about-me__education-list'>
          <h4 className='about-me__education-heading'>Education</h4>
          {this.state.educations.map(
            ({ year, location, school, fieldOfStudy, descriptionList }) => (
              <Education
                key={fieldOfStudy}
                year={year}
                location={location}
                school={school}
                fieldOfStudy={fieldOfStudy}
                descriptionList={descriptionList}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default AboutMe;
