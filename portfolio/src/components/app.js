import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
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
      barMenu: "hide",
      height: window.innerHeight,
      width: window.innerWidth,
      pages: ["story", "resume", "stack", "projects", "dev"],
    }
  }

  componentDidMount() {
    console.log(this.state.height);
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }

  handleClickMenu = () => {
    if (this.state.barMenu === "hide"){
    this.setState(state => ({barMenu: "show"}));
  } else {
    this.setState(state => ({barMenu: "hide"}));
  }
  };

  render() {

    return (
        <Router >
        <div className="Portfolio">

          <NavMenu
            screenWidth={this.state.width}
            barMenu={this.state.barMenu}
            handleClickMenu={this.handleClickMenu}/>

          <section className="PortfolioPage">
            <Route path="/" component={MyStory} exact/>

            <Route path="/MyStory" component={MyStory} exact/>
            <Route path="/Resume" component={Resume} exact/>
            <Route path="/MyStack" component={TechStack} exact/>
            <Route path="/Projects" component={Projects} exact/>
            <Route path="/Dev" component={Dev} exact/>
          </section>

          <Footer />

        </div>
        </Router>
  );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
