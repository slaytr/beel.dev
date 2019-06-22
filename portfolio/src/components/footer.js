import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <footer className="w3-container w3-green w3-center w3-margin-top" style={{
        padding: 20
      }}>
      <a href="https://github.com/slaytr">
        <i className="fab fa-github my-icon" style={{
            marginRight: 20,
            fontSize: 40
          }}></i>
      </a>
      <a href="https://www.linkedin.com/in/bill-li-7b654394/">
        <i className="fab fa-linkedin-in my-icon" style={{
            marginRight: 20,
            fontSize: 40
          }}></i>
      </a>
      <a href="https://codepen.io/slaytr/pen/arqvYM">
        <i className="fab fa-codepen my-icon" style={{
            marginRight: 15,
            fontSize: 40
          }}></i>
      </a>
      <a href="https://leetcode.com/slaytr/">
        <span className="iconify my-icon" data-icon="simple-icons:leetcode" data-inline="false" style={{
            fontSize: 35
          }}></span>
      </a>
    </footer>
  )
}

export default Footer;
