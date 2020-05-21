import React from "react";
import { Navbar } from "react-bootstrap";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';

export default function Nav({signout, token, sidebar}) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Navbar bg="dark" variant="dark">
      <Button variant="outline-light" style={{ marginRight: "10px" }} onClick={sidebar}>
      <FontAwesomeIcon icon={faBars}  />
      </Button>
        <Navbar.Brand href="#home">
          Event Manager
        </Navbar.Brand>
        <div style={{ marginLeft: "auto" }} >
        { token ? (
          <Button variant="outline-light" onClick={signout}><FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "10px" }} />Sign Out</Button>
          ) : (
            <Link to={`/SignIn`}>
            <Button>Sign In</Button>
            </Link>
          )
        }
        </div>
      </Navbar>
    </div>
  );
}
