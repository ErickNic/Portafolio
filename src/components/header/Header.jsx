import React, { useCallback, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () =>{
    const [open, setOpen] = useState(false);
    const clase = 'menu-open'
    const buttonOnClickHandler = () =>{
        if(!!open){
            document.body.classList.remove(clase)
            document.body.style.overflowY = 'scroll';
            
        }else{
            document.body.classList.add(clase)
            document.body.style.overflowY = 'hidden';
        }
        setOpen((prev)=>!prev);
        console.log(open)
    }
    return(
        <div classNamke='header'>
                <div className='header__desktopVersion' >
                    <NavLink className="navlink" to='/'  exact>Erick M.M.A</NavLink>
                    <NavLinks className="navlinks"/>
                </div>
                <div className='header__mobileVersion--container'>
                <NavLink className="navlink" to='/'  exact>Erick M.M.A</NavLink>
                <svg class="vbp-header-menu-button__svg" onClick={buttonOnClickHandler}>
                <line x1="0" y1="50%" fill='black' x2="100%" y2="50%" className="top" shapeRendering="crispEdges" />
                <line x1="0" y1="50%" fill='black' x2="100%" y2="50%" className="middle" shapeRendering="crispEdges" />
                <line x1="0" y1="50%" fill='black' x2="100%" y2="50%" className="bottom" shapeRendering="crispEdges" />
                </svg>
                </div>
                <ul className={`header_mobileVersion--Content ${open?'activeModal':''}`}>
                        <li>
                            <NavLink to="/porfolio" onClick={buttonOnClickHandler}>Proyectos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/conectemos" onClick={buttonOnClickHandler}>Contáctame</NavLink>
                        </li>
                </ul>
        </div>
    );

}

export default Header