import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

function NavMenu(props) {
  return (
    <navbar>
    {
      props.screenWidth > 600
        ? (
        <div className="topbar">
          <NavLink to="/MyStory"
            activeClassName="active"
            className="menu-item">
            My Story
          </NavLink>
          <NavLink to="/Resume"
            activeClassName="active"
            className="menu-item">
            Resume
          </NavLink>
          <NavLink to="/MyStack"
            activeClassName="active" 
            className="menu-item">
            My Stack
          </NavLink>
          <NavLink to="/Projects"
            activeClassName="active"
            className="menu-item">
            Projects
          </NavLink>
          <NavLink to="/Dev"
            activeClassName="active"
            className="menu-item">
            Dev
          </NavLink>
        </div>)
        : (
        <div className="topbar">
          <div className="menu-item" style={{
              float: "right"
            }} onClick={props.handleClickMenu}>
            <i className="fas fa-bars" style={{
                paddingLeft: 10,
                paddingRight: 10
              }}></i>
          </div>
          <NavLink to="/MyStory"
            activeClassName="active"
            className={"menu-item " + props.barMenu + " mobile"}
            onClick={props.handleClickMenu}>
            My Story
          </NavLink>
          <NavLink to="/Resume"
            activeClassName="active"
            className={"menu-item " + props.barMenu + " mobile"}
            onClick={props.handleClickMenu}>
            Resume
          </NavLink>
          <NavLink to="/MyStack"
            activeClassName="active"
            className={"menu-item " + props.barMenu + " mobile"}
            onClick={props.handleClickMenu}>
            My Stack
          </NavLink>
          <NavLink to="/Projects"
            activeClassName="active"
            className={"menu-item " + props.barMenu + " mobile"}
            onClick={props.handleClickMenu}>
            Projects
          </NavLink>
          <NavLink to="/Dev"
            activeClassName="active"
            className={"menu-item " + props.barMenu + " mobile"}
            onClick={props.handleClickMenu}>
            Dev
          </NavLink>
        </div>)
    }
    </navbar>)
}

export default NavMenu;
