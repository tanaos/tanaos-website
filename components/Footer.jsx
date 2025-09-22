import { Config } from '../config';
import styles from './Footer.module.scss';
import Link from 'next/link';


export const Footer = () => {
    return <div className={`row ${styles['footer']} m-0 align-items-center`}>
        <div className='col-12 col-md-4 m-0 p-0 text-start'>
            Copyright © {new Date().getFullYear()} Tanaos
        </div>
        <div className='col-md-4 text-md-center d-none d-md-block'>
            tanaos
        </div>
        <div className={`col-12 col-md-4 text-md-end mt-4 mt-md-0 ${styles['footer-links']} m-0 p-0`}>
            <Link href='/'>Home</Link>
            <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>Docs</a>
            <Link href='/blog'>Blog</Link>
        </div>
    </div>
};

export default Footer;