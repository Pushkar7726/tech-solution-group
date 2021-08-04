import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from "../Image/logo.jpg"

function Navbars() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fluid">
          <NavLink className="navbar-brand" to="#"></NavLink>
          {/* <img  src={logo} alt ="logo" width="50px" height="50px" /> */}
          <a href="\">
            <img
              src="https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png"
              srcset="https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png 1x, https://www.ttechsolutions.net/wp-content/uploads/2019/11/550wide_ttech_logo.png 2x"
              alt="T-Tech Solutions LLC"
              class="logo logoDefault"
              width="70px"
              height="30px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbars
