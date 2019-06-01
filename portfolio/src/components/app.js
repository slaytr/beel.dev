import React from 'react';
import Resume from './resume';
import TechStack from './techstack';
import Projects from './projects';
import MyStory from './mystory';
import Dev from './dev';
import NavMenu from './nav';
import Footer from './footer';
import './app.css';

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
    window.onpopstate = (event) => {
      console.log(window.history);
      console.log(this.state.navState);
      console.log(event);
    }
  }

  updateDimensions = () => {
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }

  handleClickResume = () => {
    this.setState(state => ({navState: "resume"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'resume');
    this.setState(state => ({barMenu: "hide"}));
    window.history.pushState(this.state,  null, "resume");

    console.log(window.history.state);
    console.log("pushed resume");
  };
  handleClickStack = () => {
    this.setState(state => ({navState: "stack"}));
    window.scrollTo(0, 0);
    window.history.replaceState(null, null, 'stack');
    this.setState(state => ({barMenu: "hide"}));

    console.log(window.history)

    window.history.pushState(this.state, null, "stack");

    console.log(window.history.state);
    console.log(window.history);
    console.log("pushed stack");
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

  render() {

    let sectionPage;
    switch(this.state.navState) {
        case 'story':
          sectionPage = <MyStory onClick={this.showDropdownMenu} />;
          break;
        case 'resume':
          sectionPage = <Resume clickStack={this.handleClickStack}/>;
          break;
        case 'stack':
          sectionPage = <TechStack />;
          break;
        case 'projects':
          sectionPage = <Projects />;
          break;
        case 'dev':
          sectionPage = <Dev />;
          break;
        default:
          sectionPage = <div> 404 How did you get here? </div>
      }

    return (
      <div className="Portfolio">
        <NavMenu
          screenWidth={this.state.width}
          barMenu={this.state.barMenu}
          menuState={this.state.navState}

          handleClickMenu={this.handleClickMenu}
          handleClickStory={this.handleClickStory}
          handleClickStack={this.handleClickStack}
          handleClickResume={this.handleClickResume}
          handleClickProjects={this.handleClickProjects}
          handleClickDev={this.handleClickDev}
         />

      <section className="PortfolioPage">
        {sectionPage}
      </section>

      <Footer />

    </div>);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
