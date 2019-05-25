import React, { Component } from 'react';
import { Navigation } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="about-me-text">
        <h1>Personal Profile</h1>
        <p>
          My name's Rory MacGregor, and I'm a full-stack software developer based in Edinburgh.
        </p>
        <p>
          I am competent in Ruby, JavaScript and Java, the frameworks Sinatra, React, Bootstrap and Spring, as well as PostgreSQL and MongoDB. 
        </p>
        <p>
          I am also well experienced in version control through Git and GitHub, Agile methodology,  Test-Driven_Development and other industry best practices. 
        </p>
        <p>
          My training comes from CodeClan in Edinburgh, where I completed their 16-week software development course, which included 3 large-scale projects, as well as many side-prjects that were continuously developed into fully-functional apps.
        </p>
        <p>
          I am currently looking for work within the Edinburgh tech industry as a junior developer.
        </p>
        {/* <Navigation>
          <Link to="/contact">Click here to contact me</Link>
        </Navigation> */}
      </div>
    )
  }
}

export default About;
