import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Event from "./Event.js";
import SignIn from "./SignIn.js";
import Home from "./Home.js"
import NoMatch from "./NoMatch.js"
import ProtectedRoute from "./ProtectedRoute.js";

class App extends Component {
  state = {
    token: null
  };

  signin = () => {
    this.setState({token:'hari'});
    console.log(this.state.token);
  }
  render() {
    return (
      <Router>
      <div>
      <h1> Event Manager </h1>
      </div>
      <Switch>
      <Route exact path="/signin" render=  { (props) => (
        <Fragment>
        <SignIn signin={this.signin} token={this.state.token} />
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
