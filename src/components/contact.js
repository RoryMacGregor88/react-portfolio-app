import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Rory MacGregor</h2>
            <img
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/31144210_2020515781610144_4443828603326562304_o.jpg?_nc_cat=104&_nc_ht=scontent-lht6-1.xx&oh=63e327f7794cd5a40a960303bf629205&oe=5D598C23"
              alt="avatar"
              className="avatar-img"
              style={{ height: '250px' }}
            />
              
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Text Goes Here</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+44) 7432 23 99 76
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '27.5px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    RoryMacGregor88@outlook.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
