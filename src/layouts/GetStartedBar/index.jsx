import React from 'react';

import './index.scss';
import { Config } from '../../config';
import { useNavigate } from 'react-router-dom';


export const GetStartedBar = () => {

    const navigate = useNavigate();

    return <div className='get-started-bar global-padding'>
        <div className='row m-0 p-0'>
            <div className='col-12 col-md-6 p-0 pe-md-5'>
                <h2 className='mb-5'>Get started now</h2>
                <p className='mb-4 mb-md-5'>
                    Develop better applications faster by laveraging the power of synthetic
                    data. Use <span className='highlight'>Synthex</span>,
                    our <span className='highlight'>free and open-source Python library</span>.
                </p>
                <button 
                    className='btn btn-dark me-2 me-md-4'
                    onClick={() => window.open(Config.SYNTHEX_GITHUB_URL, '_blank')}
                >
                    Use Synthex for free
                </button>
                <button 
                    className='btn btn-white mt-3 mt-md-0'
                    onClick={() => {}}
                >
                    View case studies
                </button>
            </div>
            <div className='col-12 col-md-6 p-0 ps-md-5 mt-5 mt-md-0'>
                <div className='row link' onClick={() => {window.open(Config.TWITTER_URL)}}>
                    <div className='col-1'>
                        <p><i className='bi bi-twitter-x'></i></p>
                    </div>
                    <div className='col-11'>
                        <p><b>Follow us on X ➔</b></p>
                        <p>
                            Follow us on X to stay updated with our latest developments and engage with
                            our community.
                        </p>
                    </div>
                </div>
                <div className='row mt-4 link' onClick={() => {navigate('/blog')}}>
                    <div className='col-1'>
                        <p><i className='bi bi-files'></i></p>
                    </div>
                    <div className='col-11'>
                        <p><b>Read our blog ➔</b></p>
                        <p>
                            Read our blog to learn how Tanaos can help you and your team develop better 
                            applications faster.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default GetStartedBar;