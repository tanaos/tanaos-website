import React from 'react';

import './index.scss';


export const PricingCard = ({ name, price, buttonText, onButtonClick, description, features, excludedFeatures }) => {
    return <div className='pricing-card'>
        <div>
            <h6>{ name }</h6>
        </div>
        <div className='mt-5'>
            <h2>{ price }</h2>
        </div>
        <div className='mt-5'>
            <span>{ description }</span>
        </div>
        <div className='mt-4 mb-5'>
            <button className='btn btn-primary' onClick={onButtonClick}>
                { buttonText }
            </button>
        </div>
        <hr />
        <div className='mt-5'>
            {
                features.map(( feature, key ) => {
                    return <div className='row feature mt-3' key={key}>
                        <div className='col-2 col-md-1'>
                            <i className='bi bi-check2'></i>
                        </div>
                        <div className='col-10 col-md-11 ps-4'>
                            { feature }
                        </div>
                    </div>
                })
            }
            {
                excludedFeatures.map(( feature, key ) => {
                    return <div className='row excluded-feature mt-3' key={key}>
                        <div className='col-2 col-md-1'>
                            <i className='bi bi-x-lg'></i>
                        </div>
                        <div className='col-10 col-md-11 ps-4'>
                            { feature }
                        </div>
                    </div>
                })
            }
        </div>
    </div>
};

export default PricingCard;