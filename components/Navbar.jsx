'use client';

import { XLg, List } from 'react-bootstrap-icons';

import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/navigation';

import { HeadlineBar } from './HeadlineBar';
import { Config } from '../config';
import styles from './Navbar.module.scss';


// Button that toggles the collapsible navbar component.
const NavbarToggle = ({ onClick, isMenuOpen }) => {
    return isMenuOpen ? 
        <XLg className={`${styles['navbar-toggle-icon']}`} onClick={onClick} /> :
        <List className={`${styles['navbar-toggle-icon']}`} onClick={onClick} />;
};

// Collapsible navbar component which contains the navbar links.
const NavbarCollapse = ({ isOpen, setOpen }) => {
    return <div className={
        `d-md-none ${styles['navbar-collapse']} text-start ${isOpen && styles['menu-active']}`
    }>
        <div className='mt-4'>
            <Navigation onLinkClick={() => setOpen(false)}/>
        </div>
    </div>
};

// The actual navbar.
export const Navbar = () => {

    const router = useRouter();
    const [ isMenuOpen, setMenuOpen ] = useState(false);
    const [ displayBanner, setDisplayBanner ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleBannerDismiss = () => {
        // Set sessionStorage flag to false, so the banner does not get displayed again during
        // the same session.
        sessionStorage.setItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG, 'false');
        // Hide banner.
        setDisplayBanner(false)
    };
    
    useEffect(() => {
        let bannerDisplayed = sessionStorage.getItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG);
        if (bannerDisplayed === null) {
            bannerDisplayed = 'true';
        }

        if (bannerDisplayed === 'true') {
            setDisplayBanner(true);
        }
    }, []);

    return <>
        {/* Headline bar. It is not ideal to have the HeadlineBar inside the Navbar, but it 
        is done this way to allow layout.jsx (which is the place where the headline bar should
        ideally go) to be a server component */}
        <HeadlineBar
            displayed={displayBanner}
            onDismiss={handleBannerDismiss}
        >
            <span>
                Do you like what we do? ⭐ Give us <a 
                    href={Config.ARTIFEX_GITHUB_URL} rel='noreferrer' target='_blank'
                >
                    a star on GitHub
                </a> or <a 
                    href={Config.TWITTER_URL} rel='noreferrer' target='_blank'
                >
                    follow us on Twitter
                </a>
            </span>
        </HeadlineBar>
        <div 
            className={`row ${styles['navbar']} m-0 ${displayBanner && styles['with-headline-bar']}`}
        >
            {/* Large devices. */}
            <div className={`m-0 p-0 ${styles['navbar-large-devices']}`}>
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
                    <span className='logo' onClick={() => router.push('/')}>Tanaos</span>
                </div>
                <div className='col-2 m-0 p-0 text-end'>
                    <NavbarToggle onClick={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
            </div>
            {/* Display the collapsible navbar component. */}
            <NavbarCollapse isOpen={isMenuOpen} setOpen={setMenuOpen} />
        </div>
    </>
};


export default Navbar;