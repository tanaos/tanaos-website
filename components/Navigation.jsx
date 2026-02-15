import { usePathname } from 'next/navigation';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../config';
import styles from './Navigation.module.scss';


export const Navigation = ({ onLinkClick }) => {
    const url = usePathname();
    return <div className={styles['navigation']}>
        <a 
            href={Config.HUGGINGFACE_URL}
            rel='noreferrer'
            target='_blank'
            onClick={onLinkClick}
        >
            Public models 🤗
        </a>
        <div className={`d-md-none ${styles['dropdown-mobile-container']}`}> 
            <span className={styles['dropdown-mobile-label']}>Custom Models</span>
            <div className={styles['dropdown-mobile-menu']}> 
                <a href={Config.MODELS_TICKET_CLASSIFICATION_ROUTE} className={styles['dropdown-mobile-link']} onClick={onLinkClick}>
                    Ticket Classification
                </a>
                <a href={Config.MODELS_CONTACT_FORM_SPAM_FILTER_ROUTE} className={styles['dropdown-mobile-link']} onClick={onLinkClick}>
                    Contact Form Spam Filter
                </a>
                <a href={Config.MODELS_EMAIL_INTENT_DETECTION_ROUTE} className={styles['dropdown-mobile-link']} onClick={onLinkClick}>
                    Email Intent Detection
                </a>
            </div>
        </div>
        <Link 
            href={Config.BLOG_ROUTE} 
            className={url === Config.BLOG_ROUTE ? styles['highlighted'] : ''}
            onClick={onLinkClick}
        >
            Blog
        </Link>
        <a 
            className='btn btn-white'
            href='#try-it-out'
            onClick={onLinkClick}
        >
            Create your model <BsArrowRight className='ms-1' />
        </a>
    </div>
};

export default Navigation;