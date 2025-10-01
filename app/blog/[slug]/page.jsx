import Link from 'next/link';
import Image from 'next/image';

import { getPost, getAllPosts } from '../../../lib/posts';
import { Config } from '../../../config';
import styles from './BlogPage.module.scss';


export async function generateMetadata(props) {
    const params = await props.params;
    const { slug } = params;
    const { frontmatter } = await getPost(slug);
    const url = `${Config.BASE_URL}/blog/${slug}/`;
    const imageUrl = `${Config.WEBSITE_BASE_URL}images/blog/${frontmatter.imageName}`;

    return {
        title: `${frontmatter.title} | Tanaos Blog`,
        description: frontmatter.description,
        keywords: frontmatter.tags,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: 'article',
            url: url,
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: frontmatter.title,
            }]
        },
        twitter: {
            card: 'summary_large_image',
            title: frontmatter.title,
            description: frontmatter.description,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { default: Post, frontmatter } = await import(`../../../content/posts/${slug}.mdx`);

    return (
        <article className={styles.article}>
            <Link href={Config.BLOG_ROUTE} className={`${styles['back-link']}`}>
                <i className='bi bi-arrow-left'></i> Back to blog
            </Link>
            <h1 className='mt-4'>{frontmatter.title}</h1>
            <p className={styles.subtitle}>{frontmatter.subtitle}</p>
            <p className={styles.date}>{frontmatter.date}</p>
            <Image
                className={`mt-5 mb-5 ${styles['post-image']}`}
                src={`/images/blog/${frontmatter.imageName}`}
                alt={frontmatter.title}
                width={1200}
                height={630}
                unoptimized // required for static export
            />
            <Post />
        </article>
    );
};

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}