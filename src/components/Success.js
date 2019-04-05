import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success"></AppBar>
          <h1>Thank you for your submission</h1>
          <p>You will get an email from us shortly with further instructions.</p>
        </>
      </MuiThemeProvider>
    )
  }
}

export default Success;