import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { ArticlesSection } from './ArticlesSection';


export const BlogPageLayout = ({ thumbnails }) => {
    return <div>
        <HeroSection />
        <ArticlesSection />
    </div>
};

export default BlogPageLayout;