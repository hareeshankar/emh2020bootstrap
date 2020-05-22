import React from "react";
import { Navbar } from "react-bootstrap";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';

export default function Nav({ token, sidebar}) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Navbar bg="dark" variant="dark">
      { token ? (<Button variant="outline-light" onClick={sidebar}>
      <FontAwesomeIcon icon={faBars}  />
      </Button>):(null)}
        <Navbar.Brand href="#home">
          Event Manager
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
