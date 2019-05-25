import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/31144210_2020515781610144_4443828603326562304_o.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=63e327f7794cd5a40a960303bf629205&oe=5D598C23"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Rory MacGregor</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #fef5ee', width: '50%'}}/>
            <p>Text goes here</p>
            <hr style={{ borderTop: '3px solid #fef5ee', width: '50%'}}/>
            <h5>Address</h5>
            <p>99/1 Lochend Road, Edinburgh</p>
            <h5>Phone</h5>
            <p>(+44) 7432 23 99 75</p>
            <h5>Email</h5>
            <p>RoryMacGregor88@outlook.com</p>
            <h5>Web</h5>
            <p>Heroku page goes here</p>
            <hr style={{ borderTop: '3px solid #fef5ee', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={"February 2019"}
              endYear={"June 2019"}
              schoolName="CodeClan Edinburgh"
              schoolDescription="text goes here"
               />

               <Education
                 startYear={2010}
                 endYear={2014}
                 schoolName="Perth College UHI"
                 schoolDescription="text goes here"
                  />
                <hr style={{borderTop: '3px solid #fef5ee'}} />

              <h2>Previous Work</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="MacGregor Decorators"
              jobDescription="text goes here"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Session Musician"
                jobDescription="text goes here"
                />
              <hr style={{borderTop: '3px solid #fef5ee'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
