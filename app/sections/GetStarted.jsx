import { BoxArrowUpRight, Github, ArrowRight } from 'react-bootstrap-icons';

import { Config } from '../../config';
import styles from './GetStarted.module.scss';


export const GetStarted = () => {

    return <div id='quickstart' className={`${styles['quickstart-section']} global-padding`}>
        <div className='row'>
            <h2 className='mb-5'>How to use</h2>
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
                            href={Config.PLATFORM_BASE_URL}
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
                Pick one of our plans to unlock higher rate limits.
            </div>
        </div>
    </div>
};

export default GetStarted;