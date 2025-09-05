import React, { useEffect } from 'react';

import { HomePageLayout } from '../../layouts/HomePageLayout';


export const HomePage = () => {

    // display top of the page after navigation
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    return <div>
        <HomePageLayout />
    </div>
}

export default HomePage;