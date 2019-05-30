import React from 'react';
import './resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div class="w3-content w3-margin-top" style={{maxWidth:1400}}>
        <div class="w3-row-padding">
          <div class="w3-third">
            <div class="w3-white  w3-margin-bottom w3-text-grey w3-card-1">
              <div class="w3-container">
                <h1 class="w3-text-dark-grey" style={{paddingTop: 16}}>Bill Li</h1>
                <hr />
                <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-green"></i>Software Engineer</p>
                <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-green"></i>Auckland, NZ</p>
                <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-green"></i>bill.li.dev@gmail.com</p>
                <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-green"></i>(+64) 022 125 9212</p>
                <hr />
              </div>
            </div>
            <div class="w3-white w3-text-grey w3-card-1">
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
                <p>Data Structures</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div class="w3-container w3-center w3-round-xlarge w3-green" style={{width: "90%"}}>90%</div>
                </div>
                <hr />

                <p class="w3-large w3-text-theme"><b>Spoken Languages</b></p>
                <p>English</p>
                <p>Mandarin</p>
                <hr />
                <div className="resumeToStack" onClick={this.props.clickStack}>
                <h2 class="w3-large w3-text-theme" style={{textAlign: "center"}}><b>My Stack</b></h2>
                <p style={{textAlign: "center"}}>Languages, Technologies, etc</p>
                </div>
                <hr />
              </div>
            </div>
            <br />

          </div>

          <div class="w3-twothird">

            <div class="w3-container w3-card w3-white w3-margin-bottom" style={{textAlign: "left"}}>
              <h2 class="w3-text-dark-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Work Experience</h2>
              <div class="w3-container">
                <h5 class="w3-text-grey"><b>Software Engineer<div className="weblink"> <a href="https://www.nyriad.com">Nyriad</a></div></b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2018 - Feb 2019</h6>
                <p>Redesigned and improved legacy infrastructure code leading to a <b>100,000% increase </b>in software processing speed.</p>
                <p>Developed a new product feature and tool, a benchmarking feature driven by an easy to use interface whilst also accurately measuring product performance. <b>Saving weeks of development time across teams</b> by eliminating the
                  training needed to use external benchmarking tools.</p>
                <p>Created, compiled and installed a custom configured linux kernel enabled for automated kernel space testing in a virtualized environment as part of the CI/CD pipeline which <b>improved code coverage from ~60% to ~96%</b></p>
                <p>Developed and tested product features with respect to <b>ISO 12207:2017 Software Engineering - Software Life Cycle Processes</b> and <b>ISO 90003:2014 Software Engineering - Quality Management Systems</b></p>
                <p>Volunteered personal time to help identify and select promising interns, including training and onboarding interns as they transitioning to developer roles</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-text-dark-grey"><b>Tech Consultant<div className="weblink"> <a href="http://www.reach17.co.nz">Reach NZ</a></div></b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - Aug 2018</h6>
                <p>Testing of customer facing IT infrastructure to ensure robustness and quality, experience with Eftpos and other point of sale systems.</p>
                <p>Developed an electronic data entry tool to replace legacy data entry methods. Set up a RaspPi hosted RDBMS server, fitted with a user interface for use by retail employees.</p>
                <p>Frequent interaction with stakeholders and customers to gather their requirements in an iterative process to ensure the production release was as close to their specifications as possible.</p>
                <hr />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-green"></i>Education</h2>
              <div class="w3-container">
                <h5><b>University of Auckland, New Zealand</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2018</h6>
                <p>Bachelor of Science, Computer Science</p>
                <p>Applied Algorithms, Distributed Databases and Computational Logic</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5><b>Auckland International College, New Zealand</b></h5>
                <h6 class="w3-text-green"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2011 - 2013</h6>
                <p>International Baccalaureate</p>
                <p> Higher Level - English, Biology, Mathmatics</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Resume;
