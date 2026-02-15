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
                    <a href={Config.MODELS_TICKET_CLASSIFICATION_ROUTE}>Ticket Classification</a>
                    <a href={Config.MODELS_CONTACT_FORM_SPAM_FILTER_ROUTE}>Contact Form Spam Filter</a>
                    <a href={Config.MODELS_EMAIL_INTENT_DETECTION_ROUTE}>Email Intent Detection</a>
                    <a href={Config.MODELS_CHATBOT_SAFETY_MODERATION_ROUTE}>Chatbot Safety & Moderation</a>
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