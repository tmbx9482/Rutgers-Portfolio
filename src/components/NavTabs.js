import React from "react";
import { Link, useLocation } from "react-router-dom";
import { faUser, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./NavTabs.css"

function NavTabs() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg border-bottom border-light">
            <h1><span className="navbar-brand mb-3 ml-3">Troy Berentsen Masterwork</span></h1>
            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav nav-flex-icons ml-auto">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> icon={faUser} /> About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}> icon={faComment} /> Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}> icon={faEnvelope} /> Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;