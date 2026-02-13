import { usePathname } from 'next/navigation';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../config';
import styles from './Navigation.module.scss';


export const Navigation = ({ onLinkClick }) => {

    const url = usePathname();

    return <div className={`${styles['navigation']}`}>
        <a 
            href={Config.PLATFORM_BASE_URL} 
            rel='noreferrer'
            target='_blank'
            className={'mt-4 mt-md-0 ms-md-4'}
            onClick={onLinkClick}
        >
            Platform
        </a>
        <a 
            href={Config.HUGGINGFACE_URL}
            rel='noreferrer'
            target='_blank'
            className={'mt-4 mt-md-0 ms-md-4'}
            onClick={onLinkClick}
        >
            Public models 🤗
        </a>
        <Link 
            href={Config.BLOG_ROUTE} 
            className={`mt-4 mt-md-0 ms-md-4 ${url === Config.BLOG_ROUTE && styles['highlighted']}`}
            onClick={onLinkClick}
        >
            Blog
        </Link>
        <a 
            className='btn btn-white mt-4 mt-md-0 ms-md-4'
            href='#try-it-out'
            onClick={onLinkClick}
        >
            Create your model <BsArrowRight className='ms-1' />
        </a>
    </div>
};

export default Navigation;