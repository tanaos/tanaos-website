// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDir = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
    const files = fs.readdirSync(postsDir);

    return files.map((filename) => {
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace('.mdx', ''),
            ...data,
        };
    });
}

export function getPost(slug) {
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return { frontmatter: data, content };
}