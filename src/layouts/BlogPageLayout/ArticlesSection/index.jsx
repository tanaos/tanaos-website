import React from 'react';

import './index.scss';
import { BlogThumbnail } from '../../../components/BlogThumbnail';
import { thumbnails } from './thumbnails';


export const ArticlesSection = () => {
    return <div className='articles-section global-padding' id='articles-section'>
        <h2>Tanaos blog</h2>
        <div className='mb-5 mt-5'>
            <div className='row'>
                { thumbnails.slice().reverse().map(( thumbnail ) => {
                    return <div className='col-12 col-md-4 mt-5' key={thumbnail.id}>
                        <BlogThumbnail 
                            img={thumbnail.img}
                            title={thumbnail.title}
                            description={thumbnail.description}
                            articleId={thumbnail.articleId}
                            category={thumbnail.category}
                        />
                    </div>
                })}
            </div>
        </div>
    </div>
};

export default ArticlesSection;