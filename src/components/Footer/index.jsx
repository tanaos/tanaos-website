import React from 'react';

import './index.scss';
import { Config } from '../../config';


export const Footer = () => {
    return <div className='row footer m-0 align-items-center'>
        <div className='col-12 col-md-4 m-0 p-0 text-start'>
            Copyright © {new Date().getFullYear()} Tanaos
        </div>
        <div className='col-md-4 text-md-center d-none d-md-block'>
            tanaos
        </div>
        <div className='col-12 col-md-4 text-md-end mt-4 mt-md-0 footer-links m-0 p-0'>
            <a href='/'>Home</a>
            <a href={Config.DOCS_URL} rel='noopener' target='_blank'>Docs</a>
            <a href='/blog'>Blog</a>
            <a href='/pricing'>Pricing</a>
            <a href='/company'>Company</a>
        </div>
    </div>
};

export default Footer;