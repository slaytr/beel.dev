import React from 'react';
import './dev.css'

class Dev extends React.Component {
  render() {
    return (
      <div style={{maxWidth: 1400}}>
        <div className="devBox">
          <div className="devCard">
            <p>04/06/19 // Changed state and navigation handling to use React Router</p>
            <p>Rearchitectured code, huge reduction in redundant code.</p>
          </div>
          <div className="devCard">
            <p>02/06/19 // Applied history API </p>
            <p>Non-AJAX navigation implemented. Code needs tidy up.</p>
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
