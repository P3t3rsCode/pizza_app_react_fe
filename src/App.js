import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Verify from "./components/Verify";
import Dashboard from "./components/Dashboard";

import { TransitionGroup, CSSTransition } from "react-transition-group";
class App extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 1000,
                  exit: 1000
                }}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/verify/otp" component={Verify} />
                  <Route path="/home" component={Dashboard} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    );
  }
}

export default App;
