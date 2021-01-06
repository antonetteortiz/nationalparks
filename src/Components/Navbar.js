import React, { Component } from "react";
import {Link, Redirect, Route } from "react-router-dom";


function Navbar() {
    return <div>
        <nav>
          <Link to="/">
            <div className="heading">
              <h1>National Parks</h1>
            </div>
          </Link>
        </nav>
      </div>;
}

export default Navbar;