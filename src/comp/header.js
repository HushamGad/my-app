import React from 'react';
import { Link,NavLink  } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div>
  <header className="hide-when-mobile ali">
      <h1><Link to="/">Css First Project</Link></h1>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/html">
          HTML
        </NavLink>
        <ul className="sub-ul">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn in 1n</a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <NavLink to="/css" className="main-link">
          CSS
        </NavLink>
        <ul className="sub-ul">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Css Example</a>
          </li>
          <li className="mini-projects">
            <a href="#">mini projects&nbsp;+</a>
            <ul className="sub-sub-ul">
              <li>
                <a href="#">Project 1</a>
              </li>
              <li>
                <a href="#">Project 2</a>
              </li>
              <li>
                <a href="#">Project 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <NavLink to="/javascript" className="main-link">
          JAVASCRIPT
        </NavLink>
        <ul className="sub-ul sub-of-js">
          <li>
            <a href="#">Coming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-when-mobile">
    <div className="navbar">
      <h1>Css First Project</h1>
      <label htmlFor="menu">
        <i className="fa-solid fa-bars" />
      </label>
    </div>
    <input type="checkbox" id="menu" />
    <div className="show-on-click">
      <div className="main-div">
        <label htmlFor="html">
          HTML <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="html" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Crash Course</a>
          </li>
          <li>
            <a href="#">Learn in 1n</a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="css">
          CSS <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="css" />
        <ul className="sub-div">
          <li>
            <a href="#">Full Course</a>
          </li>
          <li>
            <a href="#">Css Example</a>
          </li>
          <label htmlFor="mini" className="mini-projects">
            mini projects <i className="fa-solid fa-plus" />
          </label>
          <input type="checkbox" id="mini" />
          <ul className="sub-sub-div">
            <li>
              <a href="#">Project 1</a>
            </li>
            <li>
              <a href="#">Project 2</a>
            </li>
            <li>
              <a href="#">Project 3</a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="main-div">
        <label htmlFor="js">
          JAVASCRIPT
          <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="js" />
        <ul className="sub-div sub-of-js">
          <li>
            <a href="#">Coming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
        </div>
    );
}

export default Header;
