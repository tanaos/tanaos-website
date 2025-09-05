import React from 'react';

import './index.scss';


export const HeroSection = () => {
    return <div className='blog-page-hero-section global-padding'>
        <div className='row small-hero-section'>
            <div className='col-12 col-md-8'>
                <h1>See <span className='badge-primary'>what's new</span> at Tanaos</h1>
                <p className='mt-5 hero-subtitle'>
                    Learn more about synthetic data generation, generative AI and other cool stuff
                    from the Tanaos team
                </p>
            </div>
        </div>
        <button 
            className='btn btn-dark mt-4 mt-md-5'
            onClick={() => {
                const section = document.getElementById('articles-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            Read our blog
        </button>
    </div>
};

export default HeroSection;