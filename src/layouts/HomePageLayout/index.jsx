import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { GetStartedSection } from './GetStartedSection';
import { WhyTanaosSection } from './WhyTanaosSection';


export const HomePageLayout = () => {

    return <div className='homepage-layout'>
        <HeroSection />
        <GetStartedSection />
        <WhyTanaosSection />
    </div>
};