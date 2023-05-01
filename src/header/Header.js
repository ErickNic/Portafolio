import React from 'react';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return(
        <div className='header'>
                <div className='header__desktopVersion'>
                    <NavLink to='/' style={{
                        color:'black',
                        textDecoration:'none'
                    }}>Erick M.M.A</NavLink>
                    <NavLinks/>
                </div>
                <div className='header__mobileVersion'>
                </div>
        </div>
    );

}

export default Header