import React from 'react';
import {  Link } from "react-router-dom";

//NavBar, elle se sert du Link de react-router-dom pour faire le lien entre une adresse et une page js
const Navbar= () =>{
  return (
  <div className='navbar'>
        <Link to="/" className="linkNavBar">Home</Link>
        <Link to="/Browse" className="linkNavBar">Browse Characters</Link>
        <Link to="/Random" className="linkNavBar">Random Character</Link>
  </div>
  );
}

export default Navbar;