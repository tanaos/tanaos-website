import React, { useState } from 'react';

import './index.scss';
import { Navigation } from '../Navigation';


// Button that toggles the collapsible navbar component.
const NavbarToggle = ({ onClick, isMenuOpen }) => {
    return isMenuOpen ? 
        <i className='bi bi-x-lg navbar-toggle-icon' onClick={onClick}></i> :
        <i className='bi bi-list navbar-toggle-icon' onClick={onClick}></i>
};

// Collapsible navbar component which contains the navbar links.
const NavbarCollapse = ({ isOpen }) => {

    return <div className={
        `d-md-none navbar-collapse text-start ${isOpen && 'menu-active'}`
    }>
        <div className='navigation-container mt-4'>
            <Navigation />
        </div>
    </div>
};

// The actual navbar.
export const Navbar = ({ bannerVisible }) => {

    const [ isMenuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    console.log('bannerVisible: ', bannerVisible)

    return <div className={`row navbar m-0 ${bannerVisible && 'with-headline-bar'}`}>
        {/* Large devices. */}
        <div className='col-7 m-0 p-0 d-none d-md-block text-start'>
            <span className='logo' onClick={() => window.location.href = '/'}>tanaos</span>
        </div>
        <div className='col-5 d-none d-md-block m-0 p-0 text-end navigation-container'>
            <Navigation />
        </div>
    
        {/* Small devices. */}
        <div className='col-10 m-0 p-0 text-start d-md-none'>
            <span className='logo' onClick={() => window.open('/', '_self')}>tanaos</span>
        </div>
        <div className='col-2 d-md-none m-0 p-0 text-end'>
            <NavbarToggle onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        {/* Display the collapsible navbar component. */}
        <NavbarCollapse isOpen={isMenuOpen} />
    </div>
};


export default Navbar;