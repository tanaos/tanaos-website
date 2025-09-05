import React from 'react';

import './index.scss';
import { CTOCard } from '../../../components/CTOCard';
import hero_image from '../../../assets/hero_image.png'
import { Config } from '../../../config';


export const HeroSection = () => {
    return <div className='row m-0 hero-section global-padding'>
        <div className='col-12 col-md-7 m-0 p-0 mt-4'>
            <h1>
                Never be short on <span className='badge-primary'>data</span> again
            </h1>
            <p className='mt-4 hero-subtitle'>
                Generate synthetic, anonymized, GDPR-compliant datasets of any kind, that are undistinguishable 
                from real data.
            </p>
            <div className='row mt-5'>
                <div className='col-12 col-md-8'>
                    <CTOCard 
                        category='NEWS'
                        title='Try Synthex, our free and open-source Python library'
                        text="Use our free and open-source Python library to generate synthetic datasets for any use-case you may
                        have. Check it out on GitHub."
                        buttonText='Use Synthex for free'
                        onClick={() => window.open(Config.SYNTHEX_GITHUB_URL, '_blank')}
                    />
                </div>
            </div>
        </div>
        <div className='col-5 m-0 p-0 ps-5 mt-4 d-none d-md-block'>
            <img src={ hero_image } alt='hero' />
        </div>
    </div>
};

export default HeroSection;