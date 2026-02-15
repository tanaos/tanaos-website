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
        <div className={'d-md-none'} style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ cursor: 'pointer', fontWeight: 500 }}>Custom Models</span>
            <div style={{ position: 'absolute', left: 0, top: '100%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', zIndex: 10, minWidth: 220 }}>
                <a href={Config.MODELS_TICKET_CLASSIFICATION_ROUTE} style={{ display: 'block', padding: '8px 16px', color: '#222', textDecoration: 'none' }} onClick={onLinkClick}>
                    Ticket Classification
                </a>
                <a href={Config.MODELS_CONTACT_FORM_SPAM_FILTER_ROUTE} style={{ display: 'block', padding: '8px 16px', color: '#222', textDecoration: 'none' }} onClick={onLinkClick}>
                    Contact Form Spam Filter
                </a>
                <a href={Config.MODELS_EMAIL_INTENT_DETECTION_ROUTE} style={{ display: 'block', padding: '8px 16px', color: '#222', textDecoration: 'none' }} onClick={onLinkClick}>
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