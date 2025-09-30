import { Config } from '../config';
import styles from './Footer.module.scss';
import Link from 'next/link';


export const Footer = () => {
    return <div className={`row ${styles['footer']} m-0 align-items-center`}>
        <div className='col-12 col-md-4 m-0 p-0 text-start'>
            Copyright © {new Date().getFullYear()} Tanaos
        </div>
        <div className='col-md-4 text-md-center d-none d-md-block'>
            Tanaos
        </div>
        <div className={`col-12 col-md-4 text-md-end mt-4 mt-md-0 ${styles['footer-links']} m-0 p-0`}>
            <Link href={Config.HOME_ROUTE}>Home</Link>
            <Link href={Config.BLOG_ROUTE}>Blog</Link>
            <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>Docs</a>
            <a href={Config.PLATFORM_BASE_URL} rel='noreferrer' target='_blank'>Platform</a>
        </div>
    </div>
};

export default Footer;