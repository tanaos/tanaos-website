import Link from 'next/link';

import styles from './RecentBlogPosts.module.scss';


export const RecentBlogPosts = () => {
    return <div className={`global-padding ${styles['recent-blog-posts']} mb-5`}>
        <div className='d-flex align-items-center justify-content-between'>
            <h2>Recent Blog Posts</h2>
            <Link href='/blog'>
                View all <i className='bi bi-arrow-right'></i>
            </Link>
        </div>
    </div>
};