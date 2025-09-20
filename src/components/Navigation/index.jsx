import React from 'react';

import { Config } from '../../config';
import './index.scss';


export const Navigation = () => {

    const url = window.location.pathname;

    return <div className='navigation'>
        <a 
            href={Config.DOCS_URL} 
            rel='noreferrer'
            target='_blank'
            className={'nav-item mt-4 mt-md-0 ms-md-5'}
        >
            Docs
        </a>
        <a href='/blog' className={`nav-item mt-4 mt-md-0 ms-md-5 ${url === '/blog' && 'highlighted'}`}>Blog</a>
        <button 
            className='btn btn-white mt-4 mt-md-0 ms-md-5'
            onClick={() => window.open(Config.ARTIFEX_GITHUB_URL, '_blank')}
        >
            See on GitHub <i className='bi bi-github ms-2'></i>
        </button>
    </div>
};

export default Navigation;