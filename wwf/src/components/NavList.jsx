import React from "react";
import { NavLink } from "react-router-dom";



const NavList = () => {

    const activeStyle = {
        color: "white",
        textDecoration: "underline",
    };


    return(
        <div>
            <ul>
                <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Thing 1</NavLink></li>
                <li><NavLink to="wwf" style={({ isActive }) => isActive ? activeStyle : undefined}>Thing 2</NavLink></li>
            </ul>
        </div>
    )
}

export default NavList;
