import { NavLink } from "react-router-dom";
const NavLinks = () =>{
    return(
        <ul className="navBar">
            <li>
                <NavLink className="anchorHeader" to="/porfolio" exact>Proyectos</NavLink>
            </li>
            <li>
                <NavLink className="anchorHeader" to="/conectemos" exact>Contáctame</NavLink>
            </li>
        </ul>
    );
}
export default NavLinks;