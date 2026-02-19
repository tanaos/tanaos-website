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
            <a 
                href="/models" 
                className={
                    styles['dropdown-mobile-label'] +
                    (url === '/models' ? ' ' + styles['highlighted'] : '')
                }
                onClick={onLinkClick}
            >
                Custom Models
            </a>
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