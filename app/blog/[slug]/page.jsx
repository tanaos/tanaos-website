import { marked } from 'marked';
import Link from 'next/link';

import { getPost, getAllPosts } from '../../../lib/posts';
import { Config } from '../../../config';
import styles from './BlogPage.module.scss';


export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props) {
    const params = await props.params;
    const { slug } = await params;
    const { frontmatter } = getPost(slug);

    return {
        title: `${frontmatter.title} | Tanaos Blog`,
        description: frontmatter.description,
        keywords: frontmatter.tags,
        alternates: {
            canonical: `${Config.BASE_URL}/blog/${params.slug}`,
        },
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: 'article',
            url: `${Config.BASE_URL}/blog/${params.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: frontmatter.title,
            description: frontmatter.description,
        },
    };
}

export const PostPage = async props => {
    const params = await props.params;
    const { frontmatter, content } = getPost(params.slug);

    return <article className={styles.article}>
        <Link href='/blog' className={`${styles.back}`}>
            <i className='bi bi-arrow-left'></i> Back to blog
        </Link>
        <h1 className='mt-4'>{frontmatter.title}</h1>
        <h2 className={`mt-3 ${styles.subtitle}`}>{frontmatter.subtitle}</h2>
        <p className={`mt-4 ${styles['date']}`}>{frontmatter.date}</p>
        <div className='mt-5' dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </article>
}

export default PostPage;