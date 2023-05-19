import { NavLink } from "react-router-dom";
const NavLinks = () =>{
    return(
        <ul>
            <li>
                <NavLink className="anchorHeader" to="/porfolio" exact>Proyectos</NavLink>
            </li>
            <li>
                <NavLink className="anchorHeader" to="/sobremi" exact>Sobre mí</NavLink>
            </li>
            <li>
                <NavLink className="anchorHeader" to="/conectemos" exact>Contáctame</NavLink>
            </li>
        </ul>
    );
}
export default NavLinks;