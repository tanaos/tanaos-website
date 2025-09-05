import React, { useState, useEffect } from 'react';

import './index.scss';
import { useNavigate } from 'react-router-dom';
import { getBlogArticleInfo, getBlogArticleAuthorInfo } from '../../services'


export const BlogThumbnail = ({ 
    img, title, description, articleId, category
}) => {

    const [ authorInfo, setAuthorInfo ] = useState(null);
    const [ articleInfo, setArticleInfo ] = useState(null);
    const [ authorAvatarLink, setAuthorAvatarLink ] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        // Get author information from the articleId.
        const loadAuthorInfo = async () => {
            const authorInfo = await getBlogArticleAuthorInfo(articleId);
            setAuthorInfo(authorInfo);
            setAuthorAvatarLink(`https://gravatar.com/avatar/${authorInfo.gravatarHash}?s=250&d=mm&r=x`);
        };

        const loadArticleInfo = async () => {
            const articleInfo = await getBlogArticleInfo(articleId);
            setArticleInfo(articleInfo);
        }

        loadArticleInfo();
        loadAuthorInfo();
    }, [ articleId, navigate ])

    return <div className='blog-thumbnail' onClick={() => navigate(articleId)}>
        <img src={ img } alt='Tanaos' />
        <div className='thumbnail-body'>
            <div className='title'>
                <h6 className='thumbnail-title'>{ title }</h6>
            </div>
            <div className='mt-3'>
                <span className='thumbnail-description'>{ description }</span>
            </div>
            <div className='d-block d-md-none mt-5 tag-container-mobile'>
                <span className='badge-grey tag-mobile'>{category}</span>
            </div>
            <div className='thumbnail-footer mt-5'>
                <img src={authorAvatarLink} alt={authorInfo?.name} className='author-avatar' />
                <div className='ms-4'>
                    { authorInfo?.name && <div className='author-name mb-1'>
                        {authorInfo.name}
                    </div>}
                    { articleInfo?.date && <div className='article-date'>
                        {articleInfo?.date}
                    </div>}
                </div>
                <div className='d-none d-md-block tag-container'>
                    <span className='badge-grey'>{category}</span>
                </div>
            </div>
        </div>
    </div>
};

export default BlogThumbnail;