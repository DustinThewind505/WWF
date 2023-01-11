import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../logo.svg';



const NavList = () => {

    const activeStyle = {
        color: "white",
        textDecoration: "underline",
    };


    return(
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Thing 1</NavLink></li>
                <li><NavLink to="wwf" style={({ isActive }) => isActive ? activeStyle : undefined}>Thing 2</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavList;
