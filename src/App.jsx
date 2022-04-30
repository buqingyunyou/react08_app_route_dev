// import logo from './logo.svg';
import "./App.css";
import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "./routes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            {routes.map((route) => {
              return (
                <li key={route.path}>
                  <NavLink to={route.path}>{route.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </header>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                // exact,将path匹配规则调整为全等匹配
                exact
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
