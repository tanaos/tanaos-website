import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { GetStartedSection } from './GetStartedSection';
import { WhyTanaosSection } from './WhyTanaosSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { GetStartedBar } from '../GetStartedBar';


export const HomePageLayout = () => {

    return <div className='homepage-layout'>
        <HeroSection />
        <GetStartedSection />
        <WhyTanaosSection />
        <div className='px-5'>
            <hr />
        </div>
        <CaseStudiesSection />
        <GetStartedBar />
    </div>
};