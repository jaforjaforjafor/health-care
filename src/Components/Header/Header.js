import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import logo from '../Images/banner3.jpg';


const Header = () => {
    const {user, logOut}=useAuth();
    
    return (
        <div className="header">
            <img src={logo} alt=""width="1050px" height="100px" />
            <nav className="navtool">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about us">About Us</NavLink>
            <NavLink to="/testomonial">Testomonials</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
           { user.email &&<span style={{color: "green"}}>Hello {user.displayName} </span>}
           { 
           user.email ?
           <button onClick={logOut}> log out</button>
           :
            <NavLink to="/login">Login</NavLink>}
            <NavLink className="contact" to="/contact us">Contact</NavLink>
            <NavLink  to="/request">Appoinment</NavLink>
            </nav>
         
      
            
        </div>
    );
};

export default Header;