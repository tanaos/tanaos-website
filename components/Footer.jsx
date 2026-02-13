import { BsGithub } from 'react-icons/bs';
import { Config } from '../config';
import styles from './Footer.module.scss';
import Link from 'next/link';


export const Footer = () => {
    return <footer className={styles['footer']}>
        <div className={styles['footer-inner']}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-nav']}>
                    <Link href={Config.HOME_ROUTE}>Home</Link>
                    <Link href={Config.BLOG_ROUTE}>Blog</Link>
                    <a href={Config.PLATFORM_BASE_URL} rel='noreferrer' target='_blank'>Platform</a>
                </div>
                <div className={styles['footer-social']}>
                    <a href={Config.GITHUB_URL} rel='noreferrer' target='_blank' aria-label='GitHub'>
                        <BsGithub />
                    </a>
                    <a href={Config.HUGGINGFACE_URL} rel='noreferrer' target='_blank' aria-label='Hugging Face'>
                        🤗
                    </a>
                </div>
            </div>
            <div className={styles['footer-divider']} />
            <div className={styles['footer-bottom']}>
                <span>© {new Date().getFullYear()} Tanaos. All rights reserved.</span>
            </div>
        </div>
    </footer>
};

export default Footer;