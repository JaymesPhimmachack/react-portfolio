import React, { Component } from "react";
import Project from "../Project/Project";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: [
        "fab fa-html5",
        "fab fa-css3-alt",
        "fab fa-react",
        "fab fa-node",
        "fab fa-js-square",
        "fab fa-sass",
        "fab fa-grunt",
        "fab fa-elementor",
      ],
      projects: [
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686934/screen_shot_2020-09-09_at_15.08.12_xfeu9a.png",
          name: "Chalets and Caviar",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686938/screen_shot_20209-09_at_15.08.00_infvxw.png",
          name: "Watch it Outside",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686921/screen_shot_2020-09-09_at_15.08.04_phshyz.png",
          name: "Portfolio",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599682587/portfolio/tracker-3735862_1280.jpg",
          name: "Fitness tracker",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686956/tour-de-france-5543968_1280_yuecf4.jpg",
          name: "Boulder Bike Tour",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686946/humanitarian-aid-939723_1280_xw05ro.jpg",
          name: "Neighborhood Aid",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686950/ingredients-498199_1280_eift9k.jpg",
          name: "RecipeList",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686942/audience-945449_1280_f0ejjc.jpg",
          name: "ConcertFinder",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          website: "#",
          github: "#",
        },
        {
          image:
            "https://res.cloudinary.com/dcuvoemqb/image/upload/v1599686928/screen_shot_2020-09-09_at_15.08.09_vwhayr.png",
          name: "Resume",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            {this.state.technologies.map((technology) => (
              <i key={technology} class={technology}></i>
            ))}
          </div>
        </div>
        <div className='projects__list'>
          {this.state.projects.map(
            ({ image, name, description, website, github }) => (
              <Project
                image={image}
                name={name}
                description={description}
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
