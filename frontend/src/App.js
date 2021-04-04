import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app_style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import People from "./components/People";
import Projects from "./components/Projects";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar className="color-nav" variant="light">
          <NavbarBrand href="/">
            <img
              alt=""
              src="/red-hat.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </NavbarBrand>
          <Nav className="mr-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/people">People</Nav.Link>
          </Nav>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/">
            <Redirect to="/projects" />
          </Route>
          {/*  endregion */}
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}
