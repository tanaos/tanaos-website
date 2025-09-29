'use client';

import { MDXRemote } from 'next-mdx-remote';

export const MDXContent = ({ mdxSource }) => {
    return <MDXRemote {...mdxSource} />;
};