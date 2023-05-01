import React from 'react';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () =>{
    return(
        <div className='header'>
                <div className='header__desktopVersion'>
                    <NavLink className="navlink" to='/'>Erick M.M.A</NavLink>
                    <NavLinks/>
                </div>
                <div className='header__mobileVersion'>
                </div>
        </div>
    );

}

export default Header