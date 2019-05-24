import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Portfolio">
      <navbar>
        <ul>
          <li><a class="active" href="#home">Resume</a></li>
          <li><a href="#news">Tech Stack</a></li>
          <li><a href="#contact">My Story</a></li>
          <li><a href="#about">Projects</a></li>
        </ul>
      </navbar>

      <section class="w3-content w3-margin-top" style={{maxWidth:1400}}>
        <div class="w3-row-padding" style={{marginTop: 70}}>
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
              <div class="w3-container" style={{textAlign: "left"}}>
                <p class="w3-large"><b>Fields of Expertise</b></p>
                <p>Frontend</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "80%"}}>80%</div>
                </div>
                <p>Backend</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "70%"}}>
                    <div class="w3-center w3-text-white">70%</div>
                  </div>
                </div>
                <p>CI/CD</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "90%"}}>90%</div>
                </div>
                <p>Algorithms</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "90%"}}>90%</div>
                </div>
                <br />

                <p class="w3-large w3-text-theme"><b>Spoken Languages</b></p>
                <p>English</p>
                <p>Mandarin</p>
                <hr/>
              </div>
            </div>
            <br />

          </div>

          <div class="w3-twothird">

            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Work Experience</h2>
              <div class="w3-container">
                <h5><b>Software Engineer / Nyriad</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2018 - Feb 2019</h6>
                <p>Redesigned and improved legacy infrastructure code leading to a 100,000% increase in software processing speed.</p>
                <p>Developed a new product feature, a benchmarking tool that measures performance without requiring external programs.</p>
                <p>Created, compiled and installed a custom configured linux kernel for automated CI/CD tests in a containerized environment.</p>
                <p>Developed and tested product features with respect to ISO 12207 and ISO 90003.</p>
                <p>Helped train and onboard interns as they transition to developer roles</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5><b>Tech Consultant / Reach NZ</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - Aug 2018</h6>
                <p>Testing of customer facing IT infrastructure to ensure robustness and quality</p>
                <p>Developed an electronic data entry tool to replace legacy methods. RaspPi hosted RDBMS server</p>
                <p>Frequent interaction with stakeholders and customers to gather requirements.</p>
                <hr />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Education</h2>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>University of Auckland, New Zealand</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2014-2018</h6>
                <p>Bachelor of Science, Computer Science</p>
                <p>Applied Algorithms, Distributed Databases and Computational Logic</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>Auckland International College, New Zealand</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2011 - 2013</h6>
                <p>International Baccalaureate</p><p> Higher Level - English, Biology, Mathmatics</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="w3-container w3-green w3-center w3-margin-top" style={{padding: 20}}>
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
