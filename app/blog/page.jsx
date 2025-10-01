import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '../../lib/posts';
import styles from './Blog.module.scss';
import { Config } from '../../config';


export const metadata = {
    title: 'Blog | Tanaos',
    description: 'Read the latest articles about task-specific LLMs, new models and ecosystem updates.',
    alternates: {
        canonical: Config.WEBSITE_BASE_URL
    }
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return <div className={`global-padding ${styles['blog-page']}`}>
        <div className='text-center'>
            <h1>Tanaos blog</h1>
            <p className='mt-4'>
                Read articles about task-specific LLMs, new models and
                ecosystem updates.
            </p>
            <div className='mt-5 justify-content-center row'>
                {posts.map((post) => {
                    return <Link 
                        href={Config.BLOG_POST_ROUTE(post.slug)} 
                        key={post.slug} 
                        className='text-decoration-none'
                    >
                        <div className={`mt-4 ${styles['post-preview']} col-12 col-md-4`}>
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
                                <div className='text-start col'>
                                    <span className={styles['post-date']}>{post.date}</span>
                                </div>
                                <div className='text-end col'>
                                    <span className={styles['read-more']}>
                                        Read more <i className='bi bi-arrow-right'></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    </div>
}
