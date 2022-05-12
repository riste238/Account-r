import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Account App</Link>
           <ul className="navbar-nav" style={{marginLeft: 'auto'}}>
              <NavLink to="/" activeclassname={"activeLink"} className="nav-link">Account</NavLink>
              <NavLink to="/add"  activeclassname={"activeLink"} className="nav-link">Add Account</NavLink>
              <NavLink to="/edit"  activeclassanme={"activeLink"} className="nav-link">Edit/Delete</NavLink>
           </ul>
        </nav>
       
    )
}

export default Header;