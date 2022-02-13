import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { Links } from './PageLinks';
import { useState } from 'react';

export default function Navbar() {
    // const [active, isActive] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between pl-lg-0">
            <div className="container-fluid nav-container">
                <NavLink className="navbar-brand" to="/">
                    <span className="text-light cursive">Gretchen Kinney</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {Links.map((link, index) => {
                            return(
                                <NavLink to={link.path} className="nav-link">
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}