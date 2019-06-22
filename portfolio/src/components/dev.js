import React from 'react';
import './dev.css'

class Dev extends React.Component {
  render() {
    return (
      <div style={{maxWidth: 1400}}>
            <div className="w3-container w3-text-dark-grey"><h1>Public Dev History</h1></div>
        <div className="devBox">
        <div className="devCard">
          <p>23/06/19 // Created Projects, added project sections</p>
          <p>LeetCode solutions, AWS projects added to Projects page</p>
        </div>
          <div className="devCard">
            <p>05/06/19 // Added Rerouting, redirecting</p>
            <p>Created log of changes and prototype Projects page</p>
          </div>
          <div className="devCard">
            <p>04/06/19 // Changed state and navigation handling to use React Router</p>
            <p>Rearchitectured code, huge reduction in redundant code.</p>
          </div>
          <div className="devCard">
            <p>02/06/19 // Applied history API </p>
            <p>AJAX Alternative navigation implemented. Code needs tidy up.</p>
          </div>
          <div className="devCard">
            <p>26/05/19 // Initial Release</p>
          </div>
        </div>
      </div>
)
  }
}

export default Dev;
