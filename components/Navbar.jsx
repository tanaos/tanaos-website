"use client";

import { useState } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from "next/navigation";
import styles from './Navbar.module.scss';


// Button that toggles the collapsible navbar component.
const NavbarToggle = ({ onClick, isMenuOpen }) => {
    return isMenuOpen ? 
        <i className={`bi bi-x-lg ${styles['navbar-toggle-icon']}`} onClick={onClick}></i> :
        <i className={`bi bi-list ${styles['navbar-toggle-icon']}`} onClick={onClick}></i>
};

// Collapsible navbar component which contains the navbar links.
const NavbarCollapse = ({ isOpen }) => {

    return <div className={
        `d-md-none ${styles['navbar-collapse']} text-start ${isOpen && styles['menu-active']}`
    }>
        <div className='mt-4'>
            <Navigation />
        </div>
    </div>
};

// The actual navbar.
export const Navbar = ({ bannerVisible }) => {

    const router = useRouter();

    const [ isMenuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return <div className={`row ${styles['navbar']} m-0 ${bannerVisible && styles['with-headline-bar']}`}>
        {/* Large devices. */}
        <div className={`${styles['navbar-large-devices']}`}>
            <div className='col m-0 p-0 text-start'>
                <span className='logo' onClick={() => router.push('/')}>Tanaos</span>
            </div>
            <div className='col m-0 p-0 text-end'>
                <Navigation />
            </div>
        </div>
    
        {/* Small devices. */}
        <div className={`${styles['navbar-small-devices']} d-md-none m-0 p-0 d-flex align-items-center`}>
            <div className='col-10 m-0 p-0 text-start'>
                <span className='logo' onClick={() => router.push('/')}>tanaos</span>
            </div>
            <div className='col-2 m-0 p-0 text-end'>
                <NavbarToggle onClick={toggleMenu} isMenuOpen={isMenuOpen} />
            </div>
        </div>
        {/* Display the collapsible navbar component. */}
        <NavbarCollapse isOpen={isMenuOpen} />
    </div>
};


export default Navbar;