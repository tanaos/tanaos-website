import './index.scss';

import { Config } from '../../../config';
import use_artifex_snippet from '../../../assets/use_artifex_snippet.png';
import signup_image from '../../../assets/signup_image.png';
import buy_credits_image from '../../../assets/buy_credits_image.png';
import get_api_key_image from '../../../assets/get_api_key_image.png';


export const WhyTanaosSection = () => {

    return <div id='quickstart' className='quickstart-section global-padding'>
        <div className='row'>
            <h2 className='mb-5'>🚀 Quick start</h2>
            <div className='col-12 col-md-4 margin-end'>
                <div>
                    <h3 className='mb-5'>Casual usage → use for free</h3>
                </div>
                <h6>Use the Artifex library normally</h6>
                <p>
                    Install Artifex with <code>pip install artifex</code> and use
                    it for free. <a href={Config.DOCS_TRAIN_GUARDRAIL_URL} rel='noreferrer' target='_blank'>
                        Read the docs <i className='bi bi-box-arrow-up-right'></i>
                    </a> to learn more
                </p>
                <img 
                    className='mt-4'
                    src={use_artifex_snippet}
                    height='100px'
                    alt='Snippet on how to use the Artifex library to create task-specific LLMs without training data' 
                />
            </div>
            <div className='col-12 col-md-8 ps-4'>
                <div>
                    <h3 className='mb-5'>Advanced usage → pay-as-you-go</h3>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h6><span className='step-number'>1</span>Signup</h6>
                        <p>
                            Get started by creating an account <a href={Config.PLATFORM_BASE_URL} rel='noreferrer' target='_blank'>
                                on our platform <i className='bi bi-box-arrow-up-right'></i>
                            </a>
                        </p>
                        <img 
                            className='mt-4'
                            src={signup_image}
                            height='100px'
                            alt='Snippet on how to signup to the Tanaos platform to create task-specific LLMs without training data' 
                        />
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6><span className='step-number'>2</span>Buy credits</h6>
                        <p>
                            Buy any amount of credits, starting from $5
                        </p>
                        <img 
                            className='mt-4'
                            src={buy_credits_image}
                            height='100px'
                            alt='Snippet on how to add credits to the Tanaos platform to create task-specific LLMs without training data' 
                        />
                    </div>
                    <div className='col-12 col-md-4'>
                        <h6><span className='step-number'>3</span>Get an API key</h6>
                        <p>
                            Create an api key and pass it to Artifex at initialization
                        </p>
                        <img 
                            className='mt-4'
                            src={get_api_key_image}
                            height='100px'
                            alt='Snippet on how to create an API key on the Tanaos platform to create task-specific LLMs without training data' 
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaosSection;