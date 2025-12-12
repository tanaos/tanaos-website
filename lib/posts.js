import fs from 'fs';
import path from 'path';


const postsDir = path.join(process.cwd(), 'content/posts');

export async function getAllPosts() {
    const files = fs.readdirSync(postsDir);
    const posts = await Promise.all(
        files.map(async (filename) => {
            const slug = filename.replace('.mdx', '');
            const { frontmatter } = await import(`../content/posts/${slug}.mdx`);
            return {
                slug,
                ...frontmatter,
            };
        })
    );
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
    const { frontmatter } = await import(`../content/posts/${slug}.mdx`);

    return {
        frontmatter: frontmatter,
    };
}