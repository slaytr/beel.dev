import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import LegendaryCursor from "legendary-cursor";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

window.addEventListener("load", () => {
    LegendaryCursor.init({
        lineSize:         0.06,
        opacityDecrement: 0.8,
        speedExpFactor:   0.8,
        lineExpFactor:    0.6,
        sparklesCount:    20,
        maxOpacity:       0.50,  // should be a number between [0 ... 1]
        // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
        // texture2:         "http://path_to_texture",      // texture displayed on mouse click
        // texture3:         "http://path_to_texture",      // texture displayed on sparkles
    });
});