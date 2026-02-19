import { usePathname } from 'next/navigation';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../config';
import styles from './Navigation.module.scss';


export const Navigation = ({ onLinkClick }) => {
    const url = usePathname();
    return (
        <nav className={styles['navigation']}>
            <a 
                href={Config.HUGGINGFACE_URL}
                rel='noreferrer'
                target='_blank'
                onClick={onLinkClick}
            >
                Public models 🤗
            </a>
            <a 
                href="/models" 
                onClick={onLinkClick}
            >
                Custom Models
            </a>
            <Link 
                href={Config.BLOG_ROUTE} 
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
        </nav>
    );
};

export default Navigation;