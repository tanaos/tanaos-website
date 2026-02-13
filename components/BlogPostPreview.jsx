import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

import { Config } from '../config';
import styles from './BlogPostPreview.module.scss';


export const BlogPostPreview = ({ post }) => {
    return <Link 
        href={Config.BLOG_POST_ROUTE(post.slug)}
        key={post.slug}
        className={styles['preview-link']}
    >
        <div className={`mt-4 ${styles['post-preview']}`}>
            <div className={`${styles['zoom-container']} mb-4`}>
                <Image
                    src={`/images/blog/${post.imageName}`}
                    alt={post.title}
                    width={1200}
                    height={630}
                    unoptimized // required for static export
                    className={`${styles['zoom-img']}`}
                />
            </div>
            <h2>{post.title}</h2>
            <h3 className='mt-3'>{post.subtitle}</h3>
            <div className='row mt-3'>
                <div className={styles['bottom-row']}>
                    <span className={styles['post-date']}>{post.date}</span>
                    <span className={styles['read-more']}>
                        Read more <BsArrowRight />
                    </span>
                </div>
            </div>
        </div>
    </Link>
}

export default BlogPostPreview;
