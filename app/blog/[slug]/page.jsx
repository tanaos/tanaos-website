import Link from 'next/link';

import { getPost, getAllPosts } from '../../../lib/posts';
import { Config } from '../../../config';
import styles from './BlogPage.module.scss';
import { MDXContent } from '../../../components/MDXContent';


export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props) {
    const params = await props.params;
    const { slug } = params;
    const { frontmatter } = await getPost(slug);

    return {
        title: `${frontmatter.title} | Tanaos Blog`,
        description: frontmatter.description,
        keywords: frontmatter.tags,
        alternates: {
            canonical: `${Config.BASE_URL}/blog/${slug}`,
        },
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: 'article',
            url: `${Config.BASE_URL}/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: frontmatter.title,
            description: frontmatter.description,
        },
    };
}

export const PostPage = async (props) => {
    const params = await props.params;
    const { frontmatter, mdxSource } = await getPost(params.slug);

    return (
        <article className={styles.article}>
            <Link href='/blog' className={`${styles['back-link']}`}>
                <i className='bi bi-arrow-left'></i> Back to blog
            </Link>
            <h1 className='mt-4'>{frontmatter.title}</h1>
            <p className={styles.subtitle}>{frontmatter.subtitle}</p>
            <p className={styles.date}>{frontmatter.date}</p>
            <MDXContent mdxSource={mdxSource} />
        </article>
    );
};

export default PostPage;