import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// import LegendaryCursor from "legendary-cursor";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SolutionsPage from "views/SolutionsPage/SolutionsPage";
import DeepSummaryPage from "views/SolutionsPage/Solutions/DeepSummaryPage";
import OpenSourcePage from "./views/OpenSourcePage/OpenSourcePage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
        <Route exact path="/solutions" component={SolutionsPage} />
        <Route exact path="/solutions/deep-summary" component={DeepSummaryPage} />
        <Route exact path="/open-source" component={OpenSourcePage} />
        <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/components" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// window.addEventListener("load", () => {
//     LegendaryCursor.init({
//         lineSize:         0.15,
//         opacityDecrement: 0.8,
//         speedExpFactor:   0.8,
//         lineExpFactor:    0.6,
//         sparklesCount:    65,
//         maxOpacity:       0.90,  // should be a number between [0 ... 1]
//         // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
//         // texture2:         "http://path_to_texture",      // texture displayed on mouse click
//         // texture3:         "http://path_to_texture",      // texture displayed on sparkles
//     });
// });