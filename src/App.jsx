import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeadlineBar } from './components/HeadlineBar';
import { Config } from './config';
import './index.scss';


const AppRouter = () => {
    return <Routes>
        {/* Public routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:articleId' element={<BlogArticlePage />} />
        {/* Fallback route for 404 Not Found */}
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
}


const App = () => {

    const location = useLocation();

    const externalURLs = ['/404']
    const isInternalURL = !externalURLs.some(path => location.pathname.startsWith(path));

    const [ displayBanner, setDisplayBanner ] = useState(false);

    useEffect(() => {
        const displayBanner = () => {
            if (!(sessionStorage.getItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG) === 'false')) {
                // User has not dismissed the banner in the current session, so display it.
                sessionStorage.setItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG, 'true');
                setDisplayBanner(true);
            } else {
                // User has dismissed the banner in the current session, therefore do not display it.
                setDisplayBanner(false);
            };
        };

        displayBanner();
    }, []);

    const handleBannerDismiss = () => {
        // Set sessionStorage flag to false, so the banner does not get displayed again during
        // the same session.
        sessionStorage.setItem(Config.DISPLAY_BANNER_SESSION_STORAGE_FLAG, 'false');
        // Hide banner.
        setDisplayBanner(false)
    };

    return <>
        { displayBanner && <HeadlineBar onBannerDismiss={handleBannerDismiss}>
            ⭐ Do you like Tanaos? Give us <a href={Config.ARTIFEX_GITHUB_URL} rel='noreferrer' target='_blank'>a star on GitHub</a> or <a href={Config.TWITTER_URL} rel='noreferrer' target='_blank'>follow us on Twitter</a>
        </HeadlineBar> }
        <div className='app-wrapper'>
            { isInternalURL && <Navbar bannerVisible={displayBanner} /> }
            <div className='main-content'>
                <AppRouter />
            </div>
            { isInternalURL && <Footer /> }
        </div>
    </>;
}

export default App;
