import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resume from './resume/resume'
import TechStack from './techstack/techstack'
import Projects from './projects/projects'
import MyStory from './mystory/mystory'
import DevChecklist from './devlist/checklist'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navState: "story",
      mobileView: "off",
    }
  }

  handleClickResume = () => {
    this.setState(state => ({
        navState: "resume"
    }));
  };
  handleClickStack = () => {
    this.setState(state => ({
        navState: "stack"
    }));
  };
  handleClickStory = () => {
    this.setState(state => ({
        navState: "story"
    }));
  };
  handleClickProjects = () => {
    this.setState(state => ({
        navState: "projects"
    }));
  };
  handleClickDev = () => {
    this.setState(state => ({
        navState: "dev"
    }));
  };

  render(){
  return (
    <div className="Portfolio">
      <navbar>
        <ul className="topbar">
          <li className={this.state.navState === "story" ? "active menu-item" : "menu-item"} onClick={this.handleClickStory}>My Story</li>
          <li className={this.state.navState === "resume" ? "active menu-item" : "menu-item"} onClick={this.handleClickResume}>Resume</li>
          <li className={this.state.navState === "stack" ? "active menu-item" : "menu-item"} onClick={this.handleClickStack}>My Stack</li>
          <li className={this.state.navState === "projects" ? "active menu-item" : "menu-item"} onClick={this.handleClickProjects}>Projects</li>
          <li className={this.state.navState === "dev" ? "active menu-item" : "menu-item"} onClick={this.handleClickDev}>Dev</li>
        </ul>
      </navbar>
      <section class={this.state.navState === "story" ? "story" : "story hide"} >
        <MyStory />
      </section>
      <section class={this.state.navState === "resume" ? "resume" : "resume hide"} >
        <Resume />
      </section >
      <section class={this.state.navState === "stack" ? "stack" : "stack hide"} >
        <TechStack />
      </section>
      <section class={this.state.navState === "projects" ? "projects" : "projects hide"} >
        <Projects />
      </section>
      <section class={this.state.navState === "dev" ? "dev" : "dev hide"} >
        <DevChecklist />
      </section>

      <footer class="w3-container w3-green w3-center w3-margin-top" style={{padding: 20}}>
        <a href="https://github.com/slaytr">
          <i class="fab fa-github w3-hover-opacity" style={{marginRight: 20, fontSize: 40}}></i>
        </a>
        <a href="https://www.linkedin.com/in/bill-li-7b654394/">
          <i class="fab fa-linkedin-in w3-hover-opacity" style={{marginRight: 20, fontSize: 40}}></i>
        </a>
        <a href="https://codepen.io/slaytr/pen/arqvYM">
          <i class="fab fa-codepen w3-hover-opacity" style={{marginRight: 15, fontSize: 40}}></i>
        </a>
        <a href="https://leetcode.com/slaytr/">
        <span class="iconify w3-hover-opacity" data-icon="simple-icons:leetcode" data-inline="false" style={{fontSize: 35}}></span>
        </a>
      </footer>

    </div>
  );
}
}

export default App;
