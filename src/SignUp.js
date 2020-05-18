import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.signup();
  };
  render() {
    return (
      this.props.token ?
      (<Redirect to="/Home" />) :
      (<div>
        <Form onSubmit={this.onSubmit} >
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>)
    );
  }
}
export default SignUp;