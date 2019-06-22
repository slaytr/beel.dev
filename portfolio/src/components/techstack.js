import React from 'react';

class TechStack extends React.Component {
  render() {
    return (
      <div class="w3-content" style={{maxWidth:1400}}>
      <div className="w3-row">
        <div className="w3-rest">
        <div className="w3-white w3-card-1 w3-text-dark-grey">
        <div className="w3-container"><h1>My Technology Stack</h1></div>
        </div>
        </div>
      </div>
      <div class="w3-content" style={{maxWidth:1400}}>
        <div class="w3-row-padding">
          <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-1">
              <div class="w3-container" style={{textAlign: "left"}}>
                <h2 class="w3-text-dark-grey">Frontend</h2>
                <p class="w3-large"><b>Frontend Frameworks</b></p>
                <p><i class="fab fa-react w3-text-blue"></i> React (Preferred)</p>
                <p><i class="fab fa-angular w3-text-red"></i> Angular</p>
                <hr />

                <p class="w3-large"><b>State Management</b></p>
                <p style={{fontSize: 10}}>ContextAPI, Hooks or Redux?<br /> I like shopping at the better stores</p>
                <p><span class="iconify w3-text-purple" data-icon="simple-icons:redux" data-inline="false"></span> Redux</p>
                <p><span class="iconify" data-icon="logos:apollostack" data-inline="false"></span> Apollo</p>
                <hr />

                <p class="w3-large"><b>Core</b></p>
                <p style={{fontSize: 10}}>Nothing interesting here</p>
                <p><i class="fab fa-html5 w3-text-red" aria-hidden="true"></i> HTML5</p>
                <p><i class="fab fa-css3-alt w3-text-blue"></i> CSS3</p>
                <p><i class="fab fa-js-square w3-text-yellow"></i> JavaScript ES6</p>
                <hr />

                <p class="w3-large"><b>Preprocessors</b></p>
                <p style={{fontSize: 10}}>According to surveys, 66% of developers use SASS. Some of them need to use Less</p>
                <p><i class="fab fa-sass w3-text-pink"></i> SASS</p>
                <hr />

                <br />
              </div>
            </div>
            <br />

          </div>

          <div class="w3-third">

            <div class="w3-card-1 w3-white w3-margin-bottom" style={{textAlign: "left"}}>
              <div class="w3-container w3-text-grey">
                <h2 class="w3-text-dark-grey">Backend</h2>
                <p class="w3-large"><b>Backend Frameworks</b></p>
                <p style={{fontSize: 10}}>When I wake up to the morning sun that is npm, I cannot help but kneel in it's presence</p>
                <p><i class="fab fa-node-js w3-text-green"></i> Node</p>
                <p><span class="iconify" data-icon="mdi:alpha-e-circle-outline" data-inline="false"></span> Express</p>
                <p><span class="iconify" data-icon="simple-icons:django" data-inline="false"></span> Django</p>
                <p><span class="iconify" data-icon="logos:flask" data-inline="false"></span> Flask</p>
                <hr />

                <p class="w3-large"><b>Databases</b></p>
                <p style={{fontSize: 10}}>How is my schema wrong, my GraphQL server is a perfect being</p>
                <p><span class="iconify" data-icon="logos:mysql" data-inline="false"></span> MySQL (RDBMS)</p>
                <p><span class="iconify w3-text-green" data-icon="simple-icons:mongodb" data-inline="false"></span> MongoDB (noSQL)</p>
                <hr />
              </div>

              <div class="w3-container w3-text-grey">
                <h2 class="w3-text-dark-grey">Environment</h2>
                <p class="w3-large"><b>Operating Systems</b></p>
                <p style={{fontSize: 10}}>Everything else belongs in a VM</p>
                <p><i class="fab fa-windows w3-text-blue"></i> Windows (Pref Windows 10)</p>
                <p><span class="iconify" data-icon="flat-color-icons:linux" data-inline="false"></span> Linux (Preferred Ubuntu <i class="fab fa-ubuntu w3-text-orange"></i> 16.04)</p>
                <hr />

                <p class="w3-large"><b>Tools</b></p>
                <p>Editor: <span class="iconify" data-icon="logos:visual-studio" data-inline="false"></span> VSCode, <span class="iconify" data-icon="logos:atom" data-inline="false"></span> Atom</p>
                <p>Browser: <span class="iconify" data-icon="logos:firefox" data-inline="false"></span> Firefox, <span class="iconify" data-icon="logos:chrome" data-inline="false"></span> Chrome</p>
                <p>Design: <span class="iconify" data-icon="simple-icons:adobephotoshop" data-inline="false"></span> Photoshop, <span class="iconify" data-icon="fa-brands:figma" data-inline="false"></span> Figma</p>
                <p>Terminal: <span class="iconify" data-icon="logos:git-icon" data-inline="false"></span> Git Bash</p>
                <hr />
              </div>
            </div>
          </div>
          <div class="w3-third">
          <div class="w3-white w3-text-grey w3-card-1" style={{textAlign: "left"}}>
            <div class="w3-container w3-text-grey">
              <h2 class="w3-text-dark-grey">Languages</h2>
              <p class="w3-large"><b>Preferred</b></p>
              <p><span class="iconify" data-icon="logos:python" data-inline="false"></span> Python</p>
              <p><span class="iconify w3-text-blue" data-icon="simple-icons:cplusplus" data-inline="false"></span> C++</p>
              <p><span class="iconify" data-icon="logos:java" data-inline="false"></span> Java</p>
              <p><i class="fab fa-js-square w3-text-yellow"></i> JavaScript</p>
              <hr />
              <p class="w3-large"><b>Other</b></p>
              <p><span class="iconify w3-text-green" data-icon="simple-icons:nvidia" data-inline="false"></span> CUDA</p>
              <hr />
              </div>
          </div>
            <div class="w3-white w3-text-grey w3-card-1" style={{textAlign: "left"}}>
              <div class="w3-container w3-text-grey">
                <h2  class="w3-text-dark-grey">CI/CD</h2>
                <p class="w3-large"><b>Deployment</b></p>
                <p style={{fontSize: 10}}>git add *, git commit -m "MyStack v1.0"</p>
                <p><span class="iconify" data-icon="mdi:ssh" data-inline="false"></span>
 SSH</p>
                <p><span class="iconify w3-text-red" data-icon="fa-brands:git-alt" data-inline="false"></span> Git</p>
                <p><span class="iconify" data-icon="flat-color-icons:linux" data-inline="false"></span> Linux</p>
                <hr />

                <p class="w3-large"><b>Platform (AWS)</b></p>
                <p style={{fontSize: 10}}>AWS Certificate in Cloud Migration - IT Infrastructure, completed 23/05/2019</p>
                <p><span class="iconify" data-icon="logos:aws-s3" data-inline="false"></span> AWS S3</p>
                <p><span class="iconify" data-icon="logos:aws-route53" data-inline="false"></span> AWS Route 53</p>
                <p><span class="iconify" data-icon="logos:aws-lambda" data-inline="false"></span> AWS Lambdas</p>
                <p><span class="iconify" data-icon="logos:aws-ec2" data-inline="false"></span> AWS EC2</p>
                <p><span class="iconify" data-icon="logos:aws-cloudformation" data-inline="false"></span> AWS Cloud Formation</p>
                <p><span class="iconify" data-icon="logos:aws-cloudfront" data-inline="false"></span> AWS Cloud Front</p>
                <hr />

                <p class="w3-large"><b>Containers and Tools</b></p>
                <p style={{fontSize: 10}}>So things don't break... or do break</p>
                <p><span class="iconify" data-icon="logos:docker" data-inline="false"></span> Docker + <span class="iconify" data-icon="logos:kubernetes" data-inline="false"></span> Kubernetes</p>
                <p><span class="iconify" data-icon="logos:jenkins" data-inline="false"></span> Jenkins</p>
                <p><span class="iconify" data-icon="logos:gitlab" data-inline="false"></span> GitLab</p>
                <p><span class="iconify" data-icon="logos:jetbrains" data-inline="false"></span> TeamCity</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default TechStack;
