import React from 'react';

import './index.scss';
import { CustomCarousel } from '../../../components/CustomCarousel';
import text_classification from './text_classification.png';
import financial_transactions from './financial_transactions.png';


export const CaseStudiesSection = () => {
    const carouselSlides = [
        {
            title: 'Using the Tanaos platform to generate a text classification dataset',
            text: 'In this case study we show how to use the Tanaos platform to generate a synthetic text classification dataset to train a sentiment analysis model.',
            image: text_classification,
            linkUrl: '/blog/case-study-generate-synthetic-text-classification-data'
        },
        {
            title: 'Using the Tanaos platform to generate a financial transaction dataset',
            text: 'In this case study you will learn how to use the Tanaos platform to generate a synthetic financial transaction dataset for Machine Learning or data analytics.',
            image: financial_transactions,
            linkUrl: '/blog/case-study-generate-synthetic-financial-transaction-data'
        }
    ]

    return <div className='case-studies-section mt-5 mt-md-0 global-padding' id='case-studies-section'>
        <div className='row'>
            <div className='col-12 col-md-8'>
                <h2>Case studies</h2>
                <p className='mt-5'>
                    Take a look at these case studies to find out how our platform can help you generate large 
                    synthetic datasets for your specific use-case.
                </p>
            </div>
        </div>
        <CustomCarousel 
            slides={carouselSlides}
        />
    </div>
};

export default CaseStudiesSection;