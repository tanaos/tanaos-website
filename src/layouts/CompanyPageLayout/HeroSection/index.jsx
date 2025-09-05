import React from 'react';

import './index.scss';
import { Config } from '../../../config';


export const HeroSection = () => {
    return <div className='company-page-hero-section global-padding'>
        <div className='row small-hero-section'>
            <div className='col-12 col-md-8'>
                <h1>
                    Making <span className='badge-primary'>big data</span> accessible to everyone
                </h1>
                <p className='hero-subtitle mt-5'>
                    At Tanaos we develop tools for synthetic data generation that allow anybody to create 
                    their own large datasets, for Machine Learning, Data Analysis, or any other purpose.
                </p>
                <div className='mt-4 mt-md-4'>
                    <button 
                        className='btn btn-dark me-2 me-md-4 mb-3 mb-md-0'
                        onClick={() => window.open(`${Config.PLATFORM_BASE_URL}/signup`, '_blank')}
                    >
                        Try our platform
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default HeroSection;
