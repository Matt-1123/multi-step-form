import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar 
            title="Enter User Details"
            style={styles.appbar}
          >
          </AppBar>
          <TextField 
            hintText="Enter first name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
            style={styles.textfield}
          />
          <TextField 
            hintText="Enter last name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            style={styles.textfield}
          />
          <TextField 
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            style={styles.textfield}
          />
          <br/>
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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
  appbar: {
    textAlign: 'center'
  },
  textfield: {
    margin: '0 auto',
    display: 'block'
  }
}

export default FormUserDetails;