import { ArrowRight } from 'react-bootstrap-icons';
import Link from 'next/link';

import styles from './RecentBlogPosts.module.scss';
import { getAllPosts } from '../../lib/posts';
import { Config } from '../../config';


export const RecentBlogPosts = async () => {
    const posts = await getAllPosts();

    return <div className={`global-padding ${styles['recent-blog-posts']} mb-5`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']}`}>
            <h2>Recent Blog Posts</h2>
            <Link href={Config.BLOG_ROUTE} className={`${styles['view-all']}`}>
                View all <ArrowRight />
            </Link>
        </div>
        <div className='row mt-4'>
            {posts.slice(0, 3).map((post) => {
                return <Link 
                    href={Config.BLOG_POST_ROUTE(post.slug)} 
                    key={post.slug} 
                    className={`text-decoration-none ${styles['article']}`}
                >
                    <div className={`col-12 col-md-4 mt-4 ${styles['post-preview']}`}>
                        <h3>{post.title}</h3>
                        <h4 className='mt-3'>{post.subtitle}</h4>
                        <div className='row mt-3'>
                            <div className='text-start col'>
                                <span className={styles['post-date']}>{post.date}</span>
                            </div>
                            <div className='text-end col'>
                                <span className={styles['read-more']}>
                                    Read more <ArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    </div>
};