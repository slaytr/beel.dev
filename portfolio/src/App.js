import React from 'react';
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
      navState: "dev",
      barMenu: "hide",
      height: window.innerHeight,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }

  handleClickResume = () => {
    this.setState(state => ({navState: "resume"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'resume');
    this.setState(state => ({barMenu: "hide"}));
  };
  handleClickStack = () => {
    this.setState(state => ({navState: "stack"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'stack');
    this.setState(state => ({barMenu: "hide"}));
  };
  handleClickStory = () => {
    this.setState(state => ({navState: "story"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'story');
    this.setState(state => ({barMenu: "hide"}));
  };
  handleClickProjects = () => {
    this.setState(state => ({navState: "projects"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'projects');
    this.setState(state => ({barMenu: "hide"}));
  };
  handleClickDev = () => {
    this.setState(state => ({navState: "dev"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'dev');
    this.setState(state => ({barMenu: "hide"}));
  };
  handleClickMenu = () => {
    if (this.state.barMenu === "hide"){
    this.setState(state => ({barMenu: "show"}));
  } else {
    this.setState(state => ({barMenu: "hide"}));
  }
  };
  showDropdownMenu = (event) => {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }
    hideDropdownMenu = () => {
  this.setState({ displayMenu: false }, () => {
    document.removeEventListener('click', this.hideDropdownMenu);
  });

}
  render() {
    return (
      <div className="Portfolio">
      <navbar>
            {this.state.width > 600 ? (
        <ul className="topbar">
          <li className={this.state.navState === "story"
              ? "active menu-item" : "menu-item"}
              onClick={this.handleClickStory}>My Story</li>
          <li className={this.state.navState === "resume"
              ? "active menu-item" : "menu-item"}
              onClick={this.handleClickResume}>Resume</li>
          <li className={this.state.navState === "stack"
              ? "active menu-item" : "menu-item"}
              onClick={this.handleClickStack}>My Stack</li>
          <li className={this.state.navState === "projects"
              ? "active menu-item" : "menu-item"}
              onClick={this.handleClickProjects}>Projects</li>
          <li className={this.state.navState === "dev"
              ? "active menu-item" : "menu-item"}
              onClick={this.handleClickDev}>Dev</li>
        </ul>): (
          <ul className="topbar">
          <li className="menu-item" style={{float: "right"}} onClick={this.handleClickMenu}><i class="fas fa-bars" style={{paddingLeft:10, paddingRight:10}}></i></li>
          <li className={this.state.navState === "story"
              ? "active menu-item " + this.state.barMenu : "menu-item " + this.state.barMenu}
              style={{float: "none", textAlign: "left"}}
              onClick={this.handleClickStory}>My Story</li>
          <li className={this.state.navState === "resume"
              ? "active menu-item " + this.state.barMenu : "menu-item " + this.state.barMenu}
              style={{float: "none", textAlign: "left"}}
              onClick={this.handleClickResume}>Resume</li>
          <li className={this.state.navState === "stack"
              ? "active menu-item " + this.state.barMenu : "menu-item " + this.state.barMenu}
              style={{float: "none", textAlign: "left"}}
              onClick={this.handleClickStack}>My Stack</li>
          <li className={this.state.navState === "projects"
              ? "active menu-item " + this.state.barMenu : "menu-item " + this.state.barMenu}
              style={{float: "none", textAlign: "left"}}
              onClick={this.handleClickProjects}>Projects</li>
          <li className={this.state.navState === "dev"
              ? "active menu-item " + this.state.barMenu : "menu-item " + this.state.barMenu}
              style={{float: "none", textAlign: "left"}}
              onClick={this.handleClickDev}>Dev</li>
          </ul>
        )}
      </navbar>

      <section className="PortfolioPages">
        {
          this.state.navState === "story"
            ? <MyStory onClick={this.showDropdownMenu}/>
            : null
        }
        {
          this.state.navState === "resume"
            ? <Resume clickStack={this.handleClickStack}/>
            : null
        }
        {
          this.state.navState === "stack"
            ? <TechStack/>
            : null
        }
        {
          this.state.navState === "projects"
            ? <Projects/>
            : null
        }
        {
          this.state.navState === "dev"
            ? <DevChecklist/>
            : null
        }
      </section>

      <footer class="w3-container w3-green w3-center w3-margin-top" style={{
          padding: 20
        }}>
        <a href="https://github.com/slaytr">
          <i class="fab fa-github w3-hover-opacity" style={{
              marginRight: 20,
              fontSize: 40
            }}></i>
        </a>
        <a href="https://www.linkedin.com/in/bill-li-7b654394/">
          <i class="fab fa-linkedin-in w3-hover-opacity" style={{
              marginRight: 20,
              fontSize: 40
            }}></i>
        </a>
        <a href="https://codepen.io/slaytr/pen/arqvYM">
          <i class="fab fa-codepen w3-hover-opacity" style={{
              marginRight: 15,
              fontSize: 40
            }}></i>
        </a>
        <a href="https://leetcode.com/slaytr/">
          <span class="iconify w3-hover-opacity" data-icon="simple-icons:leetcode" data-inline="false" style={{
              fontSize: 35
            }}></span>
        </a>
      </footer>

    </div>);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
