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
          <AppBar title="Confirm User Data"></AppBar>
          <List>
            <ListItem 
              primaryText="First name"
              secondaryText={firstName}
            />
            <ListItem 
              primaryText="Last name"
              secondaryText={lastName}
            />
            <ListItem 
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem 
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem 
              primaryText="City"
              secondaryText={city}
            />
            <ListItem 
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>
          <br/>
          <RaisedButton 
            label="Confirm and Continue"
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
    margin: 15
  }
}

export default Confirm;