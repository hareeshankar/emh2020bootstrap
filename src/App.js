import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Event from "./Event.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Home from "./Home.js"
import NoMatch from "./NoMatch.js"
import ProtectedRoute from "./ProtectedRoute.js";
import NavBar from "./NavBar.js";

class App extends Component {
  state = {
    token: null
  };

  signin = () => {
    this.setState({token:'hari'});
    console.log(this.state.token);
  }
  signup = () => {
    this.setState({token:'hari'});
    console.log(this.state.token);
  }
  render() {
    return (
      <Router>
      <NavBar />
      <Switch>
      <Route exact path="/signin" render=  { (props) => (
        <Fragment>
        <SignIn signin={this.signin} token={this.state.token} />
        </Fragment>)
      } />
      <Route exact path="/signup" render=  { (props) => (
        <Fragment>
        <SignUp signup={this.signup} token={this.state.token} />
        </Fragment>)
      } />
      <ProtectedRoute path="/home" component={Home} token={this.state.token}/>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route component={NoMatch} />
      </Switch>
      </Router>
    );
  }

}

export default App;
