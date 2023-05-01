import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = (props) =>{
    return(
        <ul>
            <li>
                <NavLink to="/porfolio">Proyectos</NavLink>
            </li>
            <li>
                <NavLink to="/sobremi">Sobre mi</NavLink>
            </li>
            <li>
                <NavLink to="/conectemos">conectemos</NavLink>
            </li>
        </ul>
    );
}
export default NavLinks;