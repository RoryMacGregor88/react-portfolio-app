import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              StackTracker
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              IMDBeatdown
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Project 3
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Heroku</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

      {/* Project 4 */ }
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) center / cover' }} >React Project #3</CardTitle>
        <CardText>
          Name That Artist!
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Heroku</Button>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
