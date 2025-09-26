import { getPost, getAllPosts } from '../../../lib/posts';
import { marked } from 'marked';
import { Config } from '../../../config';
import styles from './BlogPage.module.scss';


export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
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

export const PostPage = ({ params }) => {
  const { frontmatter, content } = getPost(params.slug);

  return (
        <article className={styles.article}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </article>
  );
}

export default PostPage;