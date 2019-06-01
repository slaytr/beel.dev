import React from 'react';
import './nav.css';

function NavMenu(props) {

  let storyItem = "menu-item";
  let resumeItem = "menu-item";
  let stackItem = "menu-item";
  let projectsItem = "menu-item";
  let devItem = "menu-item";

  switch(props.menuState) {
    case 'story':
      storyItem = storyItem + " active"
      break;
    case 'resume':
      resumeItem = resumeItem + " active"
      break;
    case 'stack':
      stackItem = stackItem + " active"
      break;
    case 'projects':
      projectsItem = projectsItem + " active"
      break;
    case 'dev':
      devItem = devItem + " active"
      break;
  }
  return (<navbar>
    {
      props.screenWidth > 600
        ? (<ul className="topbar">
          <li className={storyItem} onClick={props.handleClickStory}>My Story</li>
          <li className={resumeItem} onClick={props.handleClickResume}>Resume</li>
          <li className={stackItem} onClick={props.handleClickStack}>My Stack</li>
          <li className={projectsItem} onClick={props.handleClickProjects}>Projects</li>
          <li className={devItem} onClick={props.handleClickDev}>Dev</li>
        </ul>)
        : (<ul className="topbar">
          <li className="menu-item" style={{
              float: "right"
            }} onClick={props.handleClickMenu}>
            <i class="fas fa-bars" style={{
                paddingLeft: 10,
                paddingRight: 10
              }}></i>
          </li>
          <li className={props.menuState === "story"
              ? "active menu-item " + props.barMenu
              : "menu-item " + props.barMenu} style={{
              float: "none",
              textAlign: "left"
            }} onClick={props.handleClickStory}>My Story</li>
          <li className={props.menuState === "resume"
              ? "active menu-item " + props.barMenu
              : "menu-item " + props.barMenu} style={{
              float: "none",
              textAlign: "left"
            }} onClick={props.handleClickResume}>Resume</li>
          <li className={props.menuState === "stack"
              ? "active menu-item " + props.barMenu
              : "menu-item " + props.barMenu} style={{
              float: "none",
              textAlign: "left"
            }} onClick={props.handleClickStack}>My Stack</li>
          <li className={props.menuState === "projects"
              ? "active menu-item " + props.barMenu
              : "menu-item " + props.barMenu} style={{
              float: "none",
              textAlign: "left"
            }} onClick={props.handleClickProjects}>Projects</li>
          <li className={props.menuState === "dev"
              ? "active menu-item " + props.barMenu
              : "menu-item " + props.barMenu} style={{
              float: "none",
              textAlign: "left"
            }} onClick={props.handleClickDev}>Dev</li>
        </ul>)
    }
  </navbar>)
}

export default NavMenu;
