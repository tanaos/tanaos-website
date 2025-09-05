import React, { useEffect } from 'react';

import BlogPageLayout from '../../layouts/BlogPageLayout';


export const BlogPage = () => {

    // display top of the page after navigation
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    return <BlogPageLayout />
};

export default BlogPage;