import { ArrowRight, ChevronUp, ChevronDoubleUp, Capslock, ArrowsMove } from 'react-bootstrap-icons';

import { Config } from '../../config';
import { PlanCard } from '../../components/PlanCard';
import styles from './GetStarted.module.scss';


export const GetStarted = () => {

    return <div id='quickstart' className={`${styles['quickstart-section']} global-padding`}>
        <div className='row'>
            <h2 className='mb-5'>Get started for free</h2>
            <div>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>1</span>Sign up</h4>
                        <p>
                            Get started by creating a free account on our platform.
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>2</span>Get a free API key</h4>
                        <p>
                            Generate a free API key from the API Key page.
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>3</span>Use the API</h4>
                        <p>
                            Pass your API Key in the <code>X-API-Key</code> header.
                        </p>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-12 col-md-4'>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.PLATFORM_BASE_URL}
                            rel='noreferrer' target='_blank'
                        >
                            Sign up <ArrowRight className='ms-1' />
                        </a>
                    </div>
                    <div className='col-12 col-md-4'>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.PLATFORM_BASE_URL}
                            rel='noreferrer' target='_blank'
                        >
                            Get API Key <ArrowRight className='ms-1' />
                        </a>
                    </div>
                    <div className='col-12 col-md-4'>
                        <a 
                            className='btn btn-primary mt-1'
                            href={Config.TANAOS_API_DEMO}
                            rel='noreferrer' target='_blank'
                        >
                            Use the API <ArrowRight className='ms-1' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <h2 className='mb-5'>Need more?</h2>
            <div>
                Pick one of our paid plans to unlock higher rate limits.
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-md-3'>
                    <PlanCard 
                        planName={'Free'} 
                        planPrice={'0'} 
                        planCurrency={'eur'}
                        planDescription={'For individuals that are just getting started.'}
                        buttonDisabled={true}
                        features={[
                            { icon: <ChevronUp />, text: 'Max 50 requests per day.' },
                        ]}
                    />
                </div>
                <div className='col-12 col-md-3'>
                    <PlanCard 
                        planName={'Plus'} 
                        planPrice={'9.99'} 
                        planCurrency={'eur'}
                        planDescription={'For individuals or small teams growing their usage.'}
                        buttonDisabled={false}
                        features={[
                            { icon: <ChevronDoubleUp />, text: 'Max 1,000 requests per day.' },
                        ]}
                    />
                </div>
                <div className='col-12 col-md-3'>
                    <PlanCard 
                        planName={'Premium'} 
                        planPrice={'49.99'} 
                        planCurrency={'eur'}
                        planDescription={'For professionals and teams needing more.'}
                        buttonDisabled={false}
                        features={[
                            { icon: <Capslock />, text: 'Max 10,000 requests per day.' },
                        ]}
                    />
                </div>
                <div className='col-12 col-md-3'>
                    <PlanCard 
                        planName={'Enterprise'} 
                        planPrice={'Contact us'} 
                        planDescription={'For businesses with specific needs.'}
                        buttonDisabled={true}
                        linkText={'Email us at info@tanaos.com to get a personalized quote. No commitment required.'}
                        features={[
                            { icon: <ArrowsMove />, text: 'Custom rate limits.' },
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>
};

export default GetStarted;