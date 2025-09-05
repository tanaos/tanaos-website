import React from 'react';

import './index.scss';
import { HeroSection } from './HeroSection';
import { ArticlesSection } from './ArticlesSection';
import { GetStartedBar } from '../GetStartedBar';


export const BlogPageLayout = ({ thumbnails }) => {
    return <div>
        <HeroSection />
        <ArticlesSection />
        <GetStartedBar />
    </div>
};

export default BlogPageLayout;