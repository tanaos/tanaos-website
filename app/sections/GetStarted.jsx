import { BsArrowRight, BsChevronUp, BsChevronDoubleUp, BsCapslock, BsArrowsMove } from 'react-icons/bs';

import { Config } from '../../config';
import { PlanCard } from '../../components/PlanCard';
import styles from './GetStarted.module.scss';


export const GetStarted = () => {

    return <div id='quickstart' className={`section-grey ${styles['quickstart-section']} global-padding`}>
        {/* <div className='row'>
            <h2 className='mb-5'>Get started for free</h2>
            <div>
                <div className='row mb-5'>
                    <div className='col-12 col-md-4 mb-5 mb-md-0'>
                        <h4><span className={`${styles['step-number']}`}>1</span>Sign up</h4>
                        <p>
                            Get started by creating a free account on our platform.
                        </p>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.PLATFORM_BASE_URL}
                            rel='noreferrer' target='_blank'
                        >
                            Sign up <BsArrowRight className='ms-1' />
                        </a>
                    </div>
                    <div className='col-12 col-md-4 mb-5 mb-md-0'>
                        <h4><span className={`${styles['step-number']}`}>2</span>Get a free API key</h4>
                        <p>
                            Generate a free API key from the API Key page.
                        </p>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.PLATFORM_BASE_URL}
                            rel='noreferrer' target='_blank'
                        >
                            Get API Key <BsArrowRight className='ms-1' />
                        </a>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>3</span>Use the API</h4>
                        <p>
                            Pass your API Key in the <code>X-API-Key</code> header.
                        </p>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.TANAOS_API_DEMO}
                            rel='noreferrer' target='_blank'
                        >
                            Use the API <BsArrowRight className='ms-1' />
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='row'>
            <h2 className='mb-5'>Pricing</h2>
            <p>
                <b>Model creation is completely free of charge</b>. Once you have the model, you 
                get to test it, <b>also for free</b>. You only pay if you decide to use the model 
                after testing it. The following pricing plans apply to the usage of the model after 
                the free testing phase.
            </p>
            <div className='row mt-5'>
                {/* <div className='col-10 col-md-3 mx-auto mb-4 mb-md-0'>
                    <PlanCard 
                        planName={'Free'} 
                        planPrice={'0'} 
                        planCurrency={'eur'}
                        planDescription={'For individuals that are just getting started.'}
                        linkText={'Try it out'}
                        linkUrl={Config.TANAOS_API_DEMO}
                        buttonDisabled={false}
                        features={[
                            { icon: <BsChevronUp />, text: 'Max 50 requests per day.' },
                        ]}
                    />
                </div> */}
                <div className='col-10 col-md-3 mx-auto mb-4 mb-md-0'>
                    <PlanCard 
                        planName={'Plus'} 
                        planPrice={'9.99'} 
                        planCurrency={'eur'}
                        linkText={'To plan selection'}
                        linkUrl={Config.PLATFORM_PLANS_PAGE_URL}
                        planDescription={'For individuals or small teams growing their usage.'}
                        buttonDisabled={false}
                        features={[
                            { icon: <BsChevronDoubleUp />, text: 'Max 200 requests per day.' },
                        ]}
                    />
                </div>
                <div className='col-10 col-md-3 mx-auto mb-4 mb-md-0'>
                    <PlanCard 
                        planName={'Premium'} 
                        planPrice={'49.99'} 
                        planCurrency={'eur'}
                        linkText={'To plan selection'}
                        linkUrl={Config.PLATFORM_PLANS_PAGE_URL}
                        planDescription={'For professionals and teams needing more.'}
                        buttonDisabled={false}
                        features={[
                            { icon: <BsCapslock />, text: 'Max 1,000 requests per day.' },
                        ]}
                    />
                </div>
                <div className='col-10 col-md-3 mx-auto mb-5 mb-md-0'>
                    <PlanCard 
                        planName={'Enterprise'} 
                        planPrice={'Contact us'} 
                        planDescription={'For businesses with specific needs.'}
                        buttonDisabled={true}
                        linkText={'Email us at info@tanaos.com to get a personalized quote. No commitment required.'}
                        features={[
                            { icon: <BsArrowsMove />, text: 'Custom rate limits.' },
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>
};

export default GetStarted;