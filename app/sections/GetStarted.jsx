import { Config } from '../../config';
import styles from './GetStarted.module.scss';


export const GetStarted = () => {

    return <div id='quickstart' className={`${styles['quickstart-section']} global-padding`}>
        <div className='row'>
            <h2 className='mb-5'>🚀 Quick start</h2>
            <div className={`col-12 col-md-4 ${styles['margin-end']}`}>
                <h3 className='mb-5'>Casual usage: free</h3>
                <h6>Use our <a href={Config.ARTIFEX_GITHUB_URL} rel='noreferrer' target='_blank'>
                    Artifex library
                </a></h6>
                <p>
                    Install Artifex with <code>pip install artifex</code> and use
                    it for free. <a href={Config.DOCS_TRAIN_GUARDRAIL_URL} rel='noreferrer' target='_blank'>
                        Read the docs <i className='bi bi-box-arrow-up-right'></i>
                    </a> to learn more
                </p>
            </div>
            <div className='col-12 col-md-8 ps-md-4 mt-4 mt-md-0'>
                <h3 className='mb-5'>Advanced usage: pay-as-you-go</h3>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h6><span className={`${styles['step-number']}`}>1</span>Signup</h6>
                        <p>
                            Get started by creating an account <a href={Config.PLATFORM_BASE_URL} rel='noreferrer' target='_blank'>
                                on our platform <i className='bi bi-box-arrow-up-right'></i>
                            </a>
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6><span className={`${styles['step-number']}`}>2</span>Buy credits</h6>
                        <p>
                            Buy any amount of credits, starting from $5
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6><span className={`${styles['step-number']}`}>3</span>Get an API key</h6>
                        <p>
                            Create an api key and pass it to <a 
                                href={Config.ARTIFEX_GITHUB_URL} 
                                rel='noreferrer' target='_blank'
                            >Artifex <i className='bi bi-box-arrow-up-right'></i></a> at initialization
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default GetStarted;