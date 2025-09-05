import React, { useEffect } from 'react';

import { CompanyPageLayout } from '../../layouts/CompanyPageLayout';


export const CompanyPage = () => {

    // display top of the page after navigation
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    return <div>
        <CompanyPageLayout />
    </div>
}

export default CompanyPage;