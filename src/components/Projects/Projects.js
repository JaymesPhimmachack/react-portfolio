import React, { Component } from "react";
import Project from "../Project/Project";
import { 
  DiBootstrap, 
  DiCss3, 
  DiJsBadge, 
  DiMongodb, 
  DiNodejs, 
  DiPostgresql, 
  DiReact,
  DiRor,
  DiRubyRough,
  DiSass,
  DiHtml5,
  DiNpm
} from "react-icons/di";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686934/portfolio/chalets-and-caviar.png",
          name: "Chalets and Caviar",
          descriptions: [
            "A Wordpress site to list properties for sale and for rent",
            "The site was built using Elementor website builder and Estatik property listing plugin tool.",
            "No live website or github as this was built on Wordpress"
          ],
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686938/portfolio/watch-it-outside.png",
          name: "Watch it Outside",
          descriptions: [
            "A website for a Watch it outside events Co. is organizing an outdoor film festival in Boston called ‘Watch it outside Boston edition’",
            "The project is to simulate a freelance job for Clara Dunn from Watch it outside",
            "The project deliverable includes a project brief and HTML and CSS source code"
          ],
          website: "https://watch-it-outside.vercel.app/",
          github: "https://github.com/JaymesPhimmachack/watch-it-outside",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686921/portfolio/portfolio.png",
          name: "Portfolio",
          descriptions: [
            "A website to showcase all my projects and a brief information about me",
            "The website was built using React, HTML5, and CSS3"
          ],
          website: "https://react-portfolio-mu.vercel.app/",
          github: "https://github.com/JaymesPhimmachack/react-portfolio",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1606133946/portfolio/move-and-groove.png",
          name: "Move 'N Groove",
          descriptions: [
            "A web app that allows users to sign up and log activities of different kinds.",
            "User have 10 activity names that are selectable from a dropdown list",
            "Technology includes HTML, CSS, Bootstrap, Ruby on Rails, and Devise"
          ],
          website: "https://jp-move-and-groove.herokuapp.com/",
          github: "https://github.com/JaymesPhimmachack/move-and-groove",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1606133946/portfolio/boulder-bike-tour.png",
          name: "Boulder Bike Tour",
          descriptions: [
            "A website for a bike race event that takes place in Colorado at the foot of the Rocky Mountains (Ruby on Rails, React, Bootstrap, React Bootstrap).",
            "Integration with Flickr API to get bike race photos",
            "Integrated LeafletJS map API to track riders' locations in real-time"
          ],
          website: "https://jp-boulder-bike-tour.herokuapp.com/",
          github: "https://github.com/JaymesPhimmachack/boulder-bike-tour",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1606133946/portfolio/neighborhood-aid.png",
          name: "Neighborhood Aid",
          descriptions: [
            "An aid platform that connects people in need to willing volunteers in any community (Ruby on Rails, React, Bootstrap, React Bootstrap, Heroku).", 
            "Integrated Action Cable for real-time chat",
            "Integration with 3-d party API’s, Google geocode and LeafletJS map API to lookup user location"
          ],
          website: "https://jp-neighborhood-aid.herokuapp.com/",
          github: "https://github.com/JaymesPhimmachack/neighborhood-aid",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686950/portfolio/recipe-list.jpg",
          name: "Recipe List",
          descriptions: [
            "Coming Soon!",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ],
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686942/portfolio/virtual-concert.jpg",
          name: "Virtual Concert",
          descriptions: [
            "Coming Soon!",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ],
          website: "#",
          github: "#",
        },
      ],
    };
  }
  render() {
    return (
      <div className='projects'>
        <h3 className='projects__main-heading'>Projects</h3>
        <div>
          <h4 className='projects__sub-heading'>Technologies:</h4>
          <div className='projects__technologies'>
            < DiBootstrap className="icon bootstrap" /> 
            < DiCss3 className="icon css3" /> 
            < DiHtml5 className="icon html5" />
            < DiJsBadge className="icon js-badge" /> 
            < DiMongodb className="icon mongodb" /> 
            < DiNodejs className="icon node" />
            < DiNpm className="icon npm" />
            < DiPostgresql className="icon postgresql" /> 
            < DiReact className="icon react" />
            < DiRor className="icon ruby-on-rails" />
            < DiRubyRough className="icon ruby" />
            < DiSass className="icon sass" />
          </div>
        </div>
        <div className='projects__list'>
          {this.state.projects.map(
            ({ image, name, descriptions, website, github }) => (
              <Project
                key={name}
                image={image}
                name={name}
                descriptions={descriptions}
                website={website}
                github={github}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
