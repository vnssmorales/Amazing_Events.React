import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCalendarAlt);
export const Navbar = () => {
    return (
        <>
 
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link to={'/'} className="navbar-brand" aria-current="page"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to={'/'}  className="nav-link active" aria-current="page">Home </Link>
                  <Link to={'/upcoming'} className="nav-link">Upcoming Events</Link>
                  <Link to={'/pastEvents'} className="nav-link">Past Events</Link>
                  <Link to={'/contact'} className="nav-link">Contact</Link>
                  <Link to={'/stats'} className="nav-link">Stats</Link>
                </div>
            </div>
            </div>
        </nav>
        </>
    )
}