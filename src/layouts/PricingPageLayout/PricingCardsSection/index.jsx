import React, { useState } from 'react';

import './index.scss';
import { PricingCard } from '../../../components/PricingCard';
import { Config } from '../../../config';
import { ContactModal } from '../../../components/ContactModal';


export const PricingCardsSection = () => {

    const [ contactModalVisible, setContactModalVisible ] = useState(false);

    const handleContactModalClosure = () => {
        setContactModalVisible(false);
    };

    return <div className='pricing-cards-section global-padding' id='pricing-plans-section'>
        <h2>Our plans</h2>
        <div className='row mt-5 mb-5'>
            <div className='col-12 col-md-4'>
                <PricingCard 
                    name='Community Plan'
                    price='Free'
                    buttonText='Use our free Python Library'
                    onButtonClick={() => window.open(Config.SYNTHEX_GITHUB_URL, '_blank')}
                    description='Use Synthex through our free and open-source Python Library. Perfect for small projects and 
                    experimentation.'
                    features={[
                        'Python Library', 'Up to 10 000 datapoints per job',
                    ]}
                    excludedFeatures={[
                        'Platform access', 'Higher tier AI model', 'Dedicated customer support'
                    ]}
                />
            </div>
            <div className='col-12 col-md-4 mt-5 mt-md-0'>
                <PricingCard 
                    name='Basic'
                    price='$0.008 / 1k tokens'
                    buttonText='Try it now'
                    onButtonClick={() => window.open(`${Config.PLATFORM_BASE_URL}/signup`, '_blank')}
                    description='Perfect for developers and organizations that need mid-sized datasets and no
                    customer support'
                    features={[
                        'Python Library', 'Up to 50 000 datapoints per job', 'Platform access', 'Higher tier AI model'
                    ]}
                    excludedFeatures={[
                        'Dedicated customer support'
                    ]}
                />
            </div>
            <div className='col-12 col-md-4 mt-5 mt-md-0'>
                <PricingCard 
                    name='Professional'
                    price='Upon request'
                    buttonText='Contact sales'
                    onButtonClick={() => setContactModalVisible(true)}
                    description='Designed for people and organizations that need very large datasets and 
                    customer support'
                    features={[
                        'Python Library', 'Up to 100 000 datapoints per job', 'Platform access', 'Higher tier AI model',
                        'Dedicated customer support'
                    ]}
                    excludedFeatures={[]}
                />
            </div>
        </div>
        <ContactModal isVisible={contactModalVisible} onHide={handleContactModalClosure} />
    </div>
};

export default PricingCardsSection;