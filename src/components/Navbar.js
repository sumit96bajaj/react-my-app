import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const textColor=(mode)=>{
    if(mode==="green" || mode==="dark"){
      return "white"
    }
    else
    return "black"
  }
  const backgroundColor=(mode)=>{
    if(mode==="green"){
      return "success"
    }
    else if(mode==="dark"){
      return "dark"
    }
    return "light"
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${backgroundColor(props.mode)}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.hometext}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                About
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.blackMode}
              type="checkbox"
              // defaultChecked="props.checkBox1Checked"
              checked={props.checkBox1Checked}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label" htmlFor="flexSwitchCheckDefault text-${textColor(props.mode)}`}>
              Enable dark mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input mx-3"
              onClick={props.greenMode}
              type="checkbox"
              role="switch"
              checked={props.checkBox2Checked}
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label" htmlFor="flexSwitchCheckDefault  text-${textColor(props.mode)}` } >
              Enable green  mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string, hometext: PropTypes.string };
