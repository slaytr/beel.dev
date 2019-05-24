import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="w3-content w3-margin-top" style={{maxWidth:1400}}>
        <div class="w3-row-padding">
          <div class="w3-third">
            <div class="w3-white  w3-margin-bottom w3-text-grey w3-card-4">
              <div class="w3-container">
                <h1>Bill Li</h1>
                <hr />
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-green"></i>Software Engineer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-green"></i>Auckland, NZ</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-green"></i>bill.li.dev@gmail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-green"></i>(+64) 022 125 9212</p>
                <hr />
              </div>
            </div>
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-container">
                <p class="w3-large"><b>Languages</b></p>
                <p>Adobe Photoshop</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "90%"}}>90%</div>
                </div>
                <p>Photography</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "80%"}}>
                    <div class="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <p>Illustrator</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "75%"}}>75%</div>
                </div>
                <p>Media</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "50%"}}>50%</div>
                </div>
                <br />

                <p class="w3-large w3-text-theme"><b>Spoken Languages</b></p>
                <p>English</p>
                <p>Mandarin</p>
              </div>
            </div>
            <br />

          </div>

          <div class="w3-twothird">

            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Work Experience</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-green w3-round">Current</span></h6>
                <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Education</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>London Business School</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                <p>Master Degree</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>School of Coding</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                <p>Bachelor Degree</p><br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="w3-container w3-green w3-center w3-margin-top" style={{padding: 10}}>
        <a href="https://github.com/slaytr">
          <i class="fa fa-github w3-hover-opacity" style={{marginRight: 20, fontSize: 40}}></i>
        </a>
        <a href="https://www.linkedin.com/in/bill-li-7b654394/">
          <i class="fa fa-linkedin w3-hover-opacity" style={{marginRight: 20, fontSize: 40}}></i>
        </a>
        <a href="https://codepen.io/slaytr/pen/arqvYM">
          <i class="fa fa-codepen w3-hover-opacity" style={{fontSize: 40}}></i>
        </a>
      </footer>

    </div>
  );
}

export default App;
