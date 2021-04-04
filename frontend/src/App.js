import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import People from "./components/People";
import Projects from "./components/Projects";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/">
            <Redirect to="/projects" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}