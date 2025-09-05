import React from 'react';

import './index.scss';
import { Config } from '../../../config';


const UseCaseBox = ({ bootstrapIconName, title, text }) => {
    return <div className='use-case-box mb-4'>
        <i className={`bi ${bootstrapIconName} me-4`}></i>
        <div className='mt-3 mt-md-0'>
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    </div>
}


export const UseCasesSection = () => {
    return <div className='mt-4 mb-5 mt-md-0 mb-md-0 global-padding'>
        <h2>Use cases</h2>
        <div className='row'>
            <div className='col-12 col-md-8'>
                <p className='mt-5'>
                    You can use Tanaos to generate synthetic data for a large variety of use cases. Here are 
                    some examples:
                </p>
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-md-4'>
                    <UseCaseBox 
                        bootstrapIconName='bi-cpu' 
                        title='Machine Learning' 
                        text='Generate large custom datasets to train or finetune your ML models on any domain.'
                    />
                </div>
                <div className='col-12 col-md-4'>
                    <UseCaseBox 
                        bootstrapIconName='bi-incognito' 
                        title='Data anonymization' 
                        text='Generate datasets with no personal identifiers to comply with 
                        data privacy regulations.'
                    />
                </div>
                <div className='col-12 col-md-4'>
                    <UseCaseBox 
                        bootstrapIconName='bi-clipboard2-check' 
                        title='Software testing' 
                        text='Generate sample data to test your software applications in a realistic
                        environment.'
                    />
                </div>
                <div className='col-12 col-md-4 mt-md-5'>
                    <UseCaseBox 
                        bootstrapIconName='bi-calculator' 
                        title='Math validation' 
                        text='Generate data to validate your mathematical models and algorithms.'
                    />
                </div>
                <div className='col-12 col-md-4 mt-md-5'>
                    <UseCaseBox 
                        bootstrapIconName='bi-bar-chart-line' 
                        title='Analytics' 
                        text='Generate data to analyze and visualize trends and patterns in your customer data.'
                    />
                </div>
                <div className='col-12 col-md-4 mt-md-5'>
                    <UseCaseBox 
                        bootstrapIconName='bi-person-bounding-box' 
                        title='Personalized offering' 
                        text='Generate data to provide a personalized experience to your users or customers.'
                    />
                </div>
            </div>
        </div>
        <div className='mt-4 mt-md-5 text-center'>
            <button 
                className='btn btn-dark'
                onClick={() => window.open(Config.SYNTHEX_GITHUB_URL, '_blank')}
            >
                Try now
            </button>
        </div>
    </div>
};

export default UseCasesSection;