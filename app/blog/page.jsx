import { getAllPosts } from '../../lib/posts';
import styles from './Blog.module.scss';
import { Config } from '../../config';
import BlogPostPreview from '../../components/BlogPostPreview';


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
            <div className='mt-5 row'>
                {posts.map((post) => {
                    return <div className='col-12 col-md-4 px-4' key={post.slug}>
                        <BlogPostPreview post={post} />
                    </div>
                })}
            </div>
        </div>
    </div>
}
