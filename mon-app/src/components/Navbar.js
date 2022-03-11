import React from 'react';
import {  Link } from "react-router-dom";

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