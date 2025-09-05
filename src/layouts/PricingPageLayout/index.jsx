import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { PricingCardsSection } from './PricingCardsSection';
import { GetStartedBar } from '../GetStartedBar';


export const PricingPageLayout = () => {
    return <div>
        <HeroSection />
        <PricingCardsSection />
        <GetStartedBar />
    </div>
};

export default PricingPageLayout;