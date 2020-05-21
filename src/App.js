import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Event from "./Event.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Home from "./Home.js"
import NoMatch from "./NoMatch.js"
import ProtectedRoute from "./ProtectedRoute.js";
import NavBar from "./NavBar.js";
import SideBar from "./SideBar.js";

class App extends Component {
  constructor(){
    super();
    this.state={
      token: localStorage.getItem("token") || "",
      sbtoggle: false,
    }
  }
  sidebar = () => {
      console.log("opened sidebar");
      this.setState({sbtoggle:true});
      console.log(this.state.sbtoggle);
  }
  sbclose= () => {
      console.log("closed sidebar");
      this.setState({sbtoggle:false});
  }
  signin = (email, password) => {
    this.setState({token:'tokensignin'});
    console.log(email + " " + password);
    localStorage.setItem("token", "tokensignin");
    console.log(localStorage.getItem("token")+" Retrieved")
  }
  signup = (email, password) => {
    this.setState({token:'hari'});
    console.log(email + " " + password);
    console.log(this.state.token);
    localStorage.setItem("token", "tokensignup");
  }
  signout = () => {
    console.log("clicked sign out");
      this.setState({sbtoggle:false, token:""});
  }
  addEvent = () => {
    console.log("Clicked Add Event");
      this.setState({sbtoggle:false});
  }
  render() {
    return (
      <Router>
      <NavBar signout={this.signout} token={this.state.token} sidebar={this.sidebar}/>
      <SideBar signout={this.signout} addEvent={this.addEvent} sbclose={this.sbclose} sbtoggle={this.state.sbtoggle}/>
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
