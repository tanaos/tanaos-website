import React from 'react';

import './index.scss';
import { Config } from '../../../config';


export const HeroSection = () => {
    return <div className='pricing-page-hero-section global-padding'>
        <div className='row small-hero-section'>
            <div className='col-12 col-md-8'>
                <h1 className='hero-title'>
                    Use <span className='badge-primary'>Synthex for free</span>, or choose a plan if you need more data.
                </h1>
                <p className='hero-subtitle mt-5'>
                    Get started with our free community plans. Pay only if you need more data.
                </p>
                <button 
                    className='btn btn-dark mt-4 mt-md-5'
                    onClick={() => {window.open(Config.SYNTHEX_GITHUB_URL, '_blank')}}
                >
                    Use Synthex for free
                </button>
            </div>
        </div>
    </div>
};

export default HeroSection;