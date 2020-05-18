import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Redirect, Link } from "react-router-dom";

class SignIn extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.signin();
  };
  render() {
    return (
      this.props.token ?
      (<Redirect to="/Home" />) :
      (
      <div>
      <h2> Existing Users, Please Sign In </h2>
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
          Submit
        </Button>
      </Form>
      <h2> New Users, Please Sign Up </h2>
        <Link to={`/SignUp`}>
        <Button>Sign Up</Button>
        </Link>
      </div>)

    );
  }
}
export default SignIn;
