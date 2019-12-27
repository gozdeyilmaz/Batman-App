import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">BATMAN TV SHOWS</Link>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
}

export default Header;