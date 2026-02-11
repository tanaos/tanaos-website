import { usePathname } from 'next/navigation';
import { ArrowRight } from 'react-bootstrap-icons';

import { Config } from '../config';
import styles from './Navigation.module.scss';


export const Navigation = ({ onLinkClick }) => {

    const url = usePathname();

    return <div className={`${styles['navigation']}`}>
        {/* <Link 
            href={Config.BLOG_ROUTE} 
            className={`mt-4 mt-md-0 ms-md-4 ${url === Config.BLOG_ROUTE && styles['highlighted']}`}
            onClick={onLinkClick}
        >
            Blog
        </Link> */}
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
            className='btn btn-white mt-4 mt-md-0 ms-md-4'
            href='#try-it-out'
            onClick={onLinkClick}
        >
            Create your model <ArrowRight className='ms-1' />
        </a>
    </div>
};

export default Navigation;