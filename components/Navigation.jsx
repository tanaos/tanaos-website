import { Config } from '../config';
import styles from './Navigation.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export const Navigation = () => {

    const url = usePathname();

    return <div className={`${styles['navigation']}`}>
        <Link 
            href='/blog' 
            className={`mt-4 mt-md-0 ms-md-5 ${url === '/blog' && styles['highlighted']}`}
        >
            Blog
        </Link>
        <a 
            href={Config.DOCS_URL} 
            rel='noreferrer'
            target='_blank'
            className={'mt-4 mt-md-0 ms-md-4'}
        >
            Docs
        </a>
        <a 
            href={Config.PLATFORM_BASE_URL} 
            rel='noreferrer'
            target='_blank'
            className={'mt-4 mt-md-0 ms-md-4'}
        >
            Platform
        </a>
        <a 
            className='btn btn-white mt-4 mt-md-0 ms-md-4'
            href={Config.ARTIFEX_GITHUB_URL}
            target='_blank' rel='noreferrer'
        >
            See on GitHub <i className='bi bi-github ms-2'></i>
        </a>
    </div>
};

export default Navigation;