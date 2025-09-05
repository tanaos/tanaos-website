import React, { useEffect } from 'react';

import { PricingPageLayout } from '../../layouts/PricingPageLayout';


export const PricingPage = () => {
    // display top of the page after navigation
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    return <div>
        <PricingPageLayout />
    </div>
};

export default PricingPage;