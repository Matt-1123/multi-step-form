import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
          <AppBar title="Success" style={styles.center}></AppBar>
          <h1 style={styles.center}>Thank you for your submission</h1>
          <p style={styles.center}>You will get an email from us shortly with further instructions.</p>
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  center: {
    textAlign: 'center'
  }
}

export default Success;