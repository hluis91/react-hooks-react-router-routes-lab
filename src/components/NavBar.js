import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink exact to="/" activeStyle={{ background: 'red' }}>Home</NavLink></li>
        <li><NavLink exact to="/movies" activeStyle={{ background: 'red' }}>Movies</NavLink></li>
        <li><NavLink exact to="/directors" activeStyle={{ background: 'red' }}>Directors</NavLink></li>
        <li><NavLink exact to="/actors" activeStyle={{ background: 'red' }}>Actors</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;
