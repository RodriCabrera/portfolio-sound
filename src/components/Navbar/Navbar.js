import React from 'react';
import './Navbar.css'
import NavBtnList from './NavBtnList/NavBtnList';

const Navbar = () => {
    return(
        <nav>
                <NavBtnList title="Trabajos"/>
        </nav>
    );
}

export default Navbar;