import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { Config } from '../config';


const postsDir = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
    const files = fs.readdirSync(postsDir);
    return files.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return {
            slug,
            frontmatter: data,
        };
    });
}

export async function getPost(slug) {
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Compile MDX content
    const mdxSource = await serialize(content, {
        // If components are needed in the MDX, add them like this:
        // components: { CustomComponent },
        scope: { Config },
    });

    return {
        frontmatter: data,
        mdxSource,
    };
}