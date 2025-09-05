import React from 'react';

import './index.scss';


export const VisionAndMissionSection = () => {
    return <div className='vision-and-mission-section mt-4 global-padding'>
        <h2>Our vision and mission</h2>
        <div className='row mt-5'>
            <div className='col-12 col-md-1 d-none d-md-block'>
                <i className='bi bi-check-lg'></i>
            </div>
            <div className='col-12 col-md-9'>
                <h6 className='mb-4'>Our mission</h6>
                <p>
                    Since acquiring large real-world datasets is an expensive and time-consuming task, only large 
                    organizations can typically afford to use them. By developing tools for accurate, safe and 
                    GDPR-compliant synthetic data generation, we enable individuals and organizations of any size 
                    to own large datasets, so they can use them to train large AI models, test software or perform
                    data analysis.
                </p>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-12 col-md-1 d-none d-md-block'>
                <i className='bi bi-check-lg'></i>
            </div>
            <div className='col-12 col-md-9'>
                <h6 className='mb-4'>Our vision</h6>
                <p>
                    We want to bring about a world in which large datasets are not exclusively owned by large
                    companies. We want to empower individuals and organizations of all sizes to generate custom 
                    datasets for their specific needs, even if they do not have the time or resources to 
                    acquire real-world data.
                </p>
            </div>
        </div>
    </div>
};


export default VisionAndMissionSection;