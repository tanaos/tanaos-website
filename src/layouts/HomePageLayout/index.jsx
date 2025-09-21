import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { GetStartedSection } from './GetStartedSection';
import { WhyTanaosSection } from './WhyTanaosSection';
import { AvailableModelsSection } from './AvailableModelsSection';


export const HomePageLayout = () => {

    return <div className='homepage-layout'>
        <HeroSection />
        <WhyTanaosSection />
        <AvailableModelsSection />
        <GetStartedSection />
    </div>
};