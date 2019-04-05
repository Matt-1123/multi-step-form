import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // send data to API here to process form
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar 
            title="Confirm User Data"
            style={styles.center}
          ></AppBar>
          <List>
            <ListItem 
              primaryText="First name"
              secondaryText={firstName}
              style={styles.center}
            />
            <ListItem 
              primaryText="Last name"
              secondaryText={lastName}
              style={styles.center}
            />
            <ListItem 
              primaryText="Email"
              secondaryText={email}
              style={styles.center}
            />
            <ListItem 
              primaryText="Occupation"
              secondaryText={occupation}
              style={styles.center}
            />
            <ListItem 
              primaryText="City"
              secondaryText={city}
              style={styles.center}
            />
            <ListItem 
              primaryText="Bio"
              secondaryText={bio}
              style={styles.center}
            />
          </List>
          <br/>
          <RaisedButton 
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton 
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: '0 auto',
    display: 'block',
    width: 125
  },
  center: {
    textAlign: 'center'
  },
  textfield: {
    margin: '0 auto',
    display: 'block'
  }
}

export default Confirm;