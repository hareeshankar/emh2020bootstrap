import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class SignIn extends Component {

  render() {
    return (
      this.props.token ?  
      (<Redirect to="/Home" />) :
      (
      <div>
      <h1>Sign In Form </h1>
      <Button onClick={this.props.signin}>
      Sign In
      </Button>
      </div>)
    );
  }

}

export default SignIn;
