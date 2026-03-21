import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Config } from '../config';
import styles from './Footer.module.scss';
import Link from 'next/link';


export const Footer = () => {
    return <footer className={styles['footer']}>
        <div className={styles['footer-inner']}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-nav-columns']}>
                    <div className={styles['footer-nav-column']}>
                        <div className={styles['footer-nav-title']}>Main</div>
                        <Link href={Config.HOME_ROUTE}>Home</Link>
                        <Link href={Config.BLOG_ROUTE}>Blog</Link>
                        <a href={Config.PLATFORM_BASE_URL} rel='noreferrer' target='_blank'>Platform</a>
                    </div>
                    <div className={styles['footer-nav-column']}>
                        <div className={styles['footer-nav-title']}>Socials</div>
                        <a href={Config.GITHUB_URL} rel='noreferrer' target='_blank' aria-label='GitHub'>
                            <BsGithub style={{ verticalAlign: 'middle', marginRight: 8 }} /> GitHub
                        </a>
                        <a href={Config.HUGGINGFACE_URL} rel='noreferrer' target='_blank' aria-label='Hugging Face'>
                            <span style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: 8 }}>🤗</span> Hugging Face
                        </a>
                        <a href={Config.LINKEDIN_URL} rel="noreferrer" target="_blank" aria-label="LinkedIn">
                            <BsLinkedin style={{ verticalAlign: 'middle', marginRight: 8 }} /> LinkedIn
                        </a>
                    </div>
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