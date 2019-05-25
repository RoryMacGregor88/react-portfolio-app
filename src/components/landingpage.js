import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/31144210_2020515781610144_4443828603326562304_o.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=63e327f7794cd5a40a960303bf629205&oe=5D598C23"
              alt="avatar"
              className="avatar-img"
              /> */}

            <div className="banner-text">
              <h1>Rory MacGregor</h1>
              <h2>Full-Stack Software Developer</h2>

              <hr/>

              <p> JavaScript | React | NodeJS | Express | Bootstrap </p>
              <p> Java | Spring | PostgreSQL | MongoDB </p>
              <p> Ruby | Sinatra | HTML3 | CSS5 </p>

        <div className="social-links">

          <a href="https://www.linkedin.com/in/rory-macgregor-b69776175/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/RoryMacGregor88" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
