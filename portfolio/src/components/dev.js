import React from 'react';
import './dev.css'

class Dev extends React.Component {
  render() {
    return (
      <div style={{maxWidth: 1400}}>
        <div className="devBox">
          <div className="devCard">
            <p> hello </p>
          </div>
        </div>
        <div class="w3-row-padding">
          <div class="w3-rest-padding">
            <div class="w3-container w3-card w3-white w3-margin-bottom devCard" style={{textAlign: "left"}}>
              <h2 class="w3-text-dark-grey w3-padding-16">History API</h2>
                <h5 class="w3-text-grey">
                  <b>Progressive Web App Requirement<div className="weblink">
                      <a href="https://www.nyriad.com">Use History API according to changes in state</a>
                    </div>
                  </b>
                </h5>
                <h6 class="w3-text-green">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>31/05/19</h6>
                <p>Areas affected: My Story, Resume, My Stack, Projects, Dev. Added features, URL extension for appropriate state change when corresponding events are engaged.</p>
            </div>
          </div>
        </div>
        <div class="w3-row-padding">
          <div class="w3-rest-padding">
            <div class="w3-container w3-card w3-white w3-margin-bottom devCard" style={{textAlign: "left"}}>
              <h2 class="w3-text-dark-grey w3-padding-16">Mobile Dropdown Menu</h2>
                <h5 class="w3-text-grey">
                  <b>Responsive Web Design Requirement<div className="weblink">
                      <a href="https://www.nyriad.com">Change Navbar User Interface according to screen width</a>
                    </div>
                  </b>
                </h5>
                <h6 class="w3-text-green">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>30/05/19</h6>
                <p>Areas affected: Navbar. Added features, bars icon added to navbar when the width of the screen is tablet or mobile. </p>
            </div>
          </div>
        </div>
      </div>
)
  }
}

export default Dev;
