import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { VisionAndMissionSection } from './VisionAndMissionSection';
import { ValuesSection } from './ValuesSection';
import { GetStartedBar } from '../GetStartedBar';


export const CompanyPageLayout = () => {
    return <div className='company-page-layout'>
        <HeroSection />
        <VisionAndMissionSection />
        <div className='px-5'>
            <hr />
        </div>
        <ValuesSection />
        <GetStartedBar />
    </div>
};

export default CompanyPageLayout;