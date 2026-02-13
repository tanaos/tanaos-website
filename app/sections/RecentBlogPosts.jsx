import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import styles from './RecentBlogPosts.module.scss';
import { getAllPosts } from '../../lib/posts';
import { Config } from '../../config';
import BlogPostPreview from '../../components/BlogPostPreview';


export const RecentBlogPosts = async () => {
    const posts = await getAllPosts();

    return <div className={`global-padding ${styles['recent-blog-posts']} mb-5`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']}`}>
            <h2>Recent Blog Posts</h2>
            <Link href={Config.BLOG_ROUTE} className={`${styles['view-all']}`}>
                View all <BsArrowRight />
            </Link>
        </div>
        <div className='row mt-4'>
            {posts.slice(0, 3).map((post) => {
                return <div className='col-12 col-md-4 mt-4' key={post.slug}>
                    <BlogPostPreview post={post} />
                </div>
            })}
        </div>
    </div>
};