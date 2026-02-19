'use client';

import { 
    BsXLg, BsList, BsEnvelopeOpen, BsEnvelopeSlash, BsTag, BsShieldCheck,
    BsFileText, BsGraphUp, BsWrench
} from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { HeadlineBar } from './HeadlineBar';
import { Config } from '../config';
import styles from './Navbar.module.scss';


// Button that toggles the collapsible navbar component.
const NavbarToggle = ({ onClick, isMenuOpen }) => {
    return isMenuOpen ? 
        <BsXLg className={`${styles['navbar-toggle-icon']}`} onClick={onClick} /> :
        <BsList className={`${styles['navbar-toggle-icon']}`} onClick={onClick} />;
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
    const [currentPath, setCurrentPath] = useState('');

    // Get current path for highlighting
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);
    const [ isMenuOpen, setMenuOpen ] = useState(false);
    const [ displayBanner, setDisplayBanner ] = useState(false);
    const [ showDropdown, setShowDropdown ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleBannerDismiss = () => {
        sessionStorage.setItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG, 'false');
        setDisplayBanner(false)
    };

    // Dropdown handlers
    const handleDropdownClick = (e) => {
        e.preventDefault();
        setShowDropdown((prev) => !prev);
    };
    const handleDropdownMouseEnter = () => setShowDropdown(true);
    const handleDropdownMouseLeave = () => setShowDropdown(false);

    // Close dropdown on outside click
    useEffect(() => {
        if (!showDropdown) return;
        const handleClick = (e) => {
            if (!e.target.closest('.dropdown')) setShowDropdown(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [showDropdown]);

    useEffect(() => {
        let bannerDisplayed = sessionStorage.getItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG);
        if (bannerDisplayed === null) {
            bannerDisplayed = 'true';
        }
        if (bannerDisplayed === 'true') {
            setDisplayBanner(false); // Set to true to enable the banner
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
                    <Image
                        src='/images/logo.png'
                        alt='Create task-specific LLMs for NLP and Text Classification | Tanaos'
                        width={40}
                        height={40}
                        onClick={() => router.push('/')}
                        className={styles['logo']}
                        unoptimized
                    />
                </div>
                <div className={`col m-0 p-0 text-end d-flex align-items-center justify-content-end ${styles['navbar-actions']}`}> 
                    <Navigation />
                </div>
            </div>
            {/* Small devices. */}
            <div className={`${styles['navbar-small-devices']} d-md-none m-0 p-0 d-flex align-items-center`}>
                <div className='col-10 m-0 p-0 text-start'>
                    <Image
                        src='/images/logo.png'
                        alt='Create task-specific LLMs for NLP and Text Classification | Tanaos'
                        width={40}
                        height={40}
                        onClick={() => router.push('/')}
                        className={styles['logo']}
                        unoptimized
                    />
                </div>
                <div className='col-2 m-0 p-0 text-end'>
                    <NavbarToggle onClick={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
            </div>
            {/* Display the collapsible navbar component. */}
            <NavbarCollapse isOpen={isMenuOpen} setOpen={setMenuOpen} />
            {/* Mobile models link (in collapsible menu) handled in Navigation.jsx */}
        </div>
    </>
};


export default Navbar;