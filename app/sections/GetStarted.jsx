import { Config } from '../../config';
import styles from './GetStarted.module.scss';


export const GetStarted = () => {

    return <div id='quickstart' className={`${styles['quickstart-section']} global-padding`}>
        <div className='row'>
            <h2 className='mb-5'>🚀 Quick start</h2>
            <div className={`col-12 col-md-4 ${styles['margin-end']}`}>
                <h3 className='mb-5'>Casual usage: free</h3>
                <h4>Use our open source <a href={Config.ARTIFEX_GITHUB_URL} rel='noreferrer' target='_blank'>
                    Artifex library
                </a></h4>
                <p>
                    Install Artifex with <code>pip install artifex</code> and use
                    it for free. <a href={Config.DOCS_TRAIN_GUARDRAIL_URL} rel='noreferrer' target='_blank'>
                        Read the docs <i className='bi bi-box-arrow-up-right'></i>
                    </a> to learn more.
                </p>
                <a 
                    className='btn btn-primary mt-3'
                    href={Config.ARTIFEX_GITHUB_URL}
                    rel='noreferrer' target='_blank'
                >
                    Start for free <i className='bi bi-github ms-1'></i>
                </a>
            </div>
            <div className='col-12 col-md-8 ps-md-4 mt-5 mt-md-0 mb-5 mb-md-0'>
                <h3 className='mb-5'>Advanced usage: pay-as-you-go</h3>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>1</span>Signup</h4>
                        <p>
                            Get started by creating an account on our platform.
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>2</span>Buy credits</h4>
                        <p>
                            Buy any amount of credits, starting from $5.
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h4><span className={`${styles['step-number']}`}>3</span>Get an API key</h4>
                        <p>
                            Create an api key and pass it to <a 
                                href={Config.ARTIFEX_GITHUB_URL} 
                                rel='noreferrer' target='_blank'
                            >Artifex <i className='bi bi-box-arrow-up-right'></i></a> at initialization.
                        </p>
                    </div>
                </div>
                <a 
                    className='btn btn-white mt-1'
                    href={Config.PLATFORM_BASE_URL}
                    rel='noreferrer' target='_blank'
                >
                    Signup <i className='bi bi-arrow-right ms-1'></i>
                </a>
            </div>
        </div>
    </div>
};

export default GetStarted;