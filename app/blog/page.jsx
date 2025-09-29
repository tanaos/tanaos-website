import Link from 'next/link';

import { getAllPosts } from '../../lib/posts';
import styles from './Blog.module.scss';


export const metadata = {
  title: 'Blog | Tanaos',
  description: 'Read the latest articles about task-specific LLMs, new models and ecosystem updates.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return <div className={`global-padding ${styles['blog-page']}`}>
        <div className='text-center'>
            <h1>Tanaos blog</h1>
            <p className='mt-4'>
                Read articles about task-specific LLMs, new models and
                ecosystem updates.
            </p>
            <div className='mt-5 justify-content-center d-flex'>
                {posts.map((post) => {
                    return <Link 
                        href={`/blog/${post.slug}`} 
                        key={post.slug} 
                        className='text-decoration-none'
                    >
                        <div className={`mt-4 ${styles['post-preview']}`}>
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
