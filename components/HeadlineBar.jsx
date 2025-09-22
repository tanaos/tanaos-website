"use client";

import { useState, useEffect } from 'react';

import styles from './HeadlineBar.module.scss';
import { Config } from '../config';

export const HeadlineBar = ({ children }) => {

    const [displayBanner, setDisplayBanner] = useState(false);

    useEffect(() => {
        let bannerDisplayed = sessionStorage.getItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG);
        if (bannerDisplayed === null) {
            bannerDisplayed = 'true';
        }
        console.log('bannerDisplayed: ', bannerDisplayed)
        if (bannerDisplayed === 'true') {
            setDisplayBanner(true);
        }
    }, []);

    const handleBannerDismiss = () => {
        // Set sessionStorage flag to false, so the banner does not get displayed again during
        // the same session.
        sessionStorage.setItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG, 'false');
        // Hide banner.
        setDisplayBanner(false)
    };

    return displayBanner && <div className={styles['headline-bar']}>
        <i className={`bi bi-x-lg ${styles['close-icon']} me-2`}
            onClick={handleBannerDismiss}
        ></i>
        { children }
    </div>
};

export default HeadlineBar;