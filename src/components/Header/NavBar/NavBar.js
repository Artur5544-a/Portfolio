import React, { useEffect, useState } from 'react';
import './NavBar.css'
import logo from '../../../img/logo.svg'
import { TiThMenu } from 'react-icons/ti';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return <div className='NavBar'>
        <nav className='nav'>
            <div className='nav-logo'>
                <NavLink to={"/"}><img src={logo} /> </NavLink>
            </div> <div className='burger-menu'>
                <TiThMenu onClick={handleMenu} />
            </div>
            <ul className={`open ${menu ? "opennav" : ""}`} onClick={() => setMenu(false)}>
                <li><NavLink to='/' >Home </NavLink></li>
                <li> <NavLink to='/About' >About</NavLink></li>
                <li><NavLink to='/Portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </div>;
};
