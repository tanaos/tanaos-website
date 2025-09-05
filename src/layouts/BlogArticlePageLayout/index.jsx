import React from 'react';

import './index.scss';
import { Config } from '../../config';
import { useToast } from '../../context/ToastContext';


export const BlogArticlePageLayout = ({ ArticleComponent, authorInfo, articleInfo }) => {

    const authorAvatarLink = `https://gravatar.com/avatar/${authorInfo.gravatarHash}?s=250&d=mm&r=x`;
    const { addToast } = useToast(); 

    const pageUrl = window.location.href;
    const website = Config.WEBSITE_BASE_URL.replace('https://', '');

    const title = `I have just read this article on ${website} and I found it interesting, check it out!\n\n`;
    const shareText = `${title} ${pageUrl}`;

    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(pageUrl)}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(pageUrl);
        addToast('Link copied', 'success');
    };

    return <div className='row m-0 blog-article-page align-items-start'>
        <div className='d-none d-md-block col-md-2 share-section text-center'>
            <span>Share</span>
            <div className='mt-3'><i className='bi bi-twitter-x' onClick={() => window.open(xUrl)}></i></div>
            <div className='mt-3'><i className='bi bi-linkedin' onClick={() => window.open(linkedinUrl)}></i></div>
            <div className='mt-3'><i className='bi bi-whatsapp' onClick={() => window.open(whatsappUrl)}></i></div>
            <div className='mt-3'><i className='bi bi-copy' onClick={handleCopyToClipboard}></i></div>
        </div>
        <div className='col-12 col-md-8 p-0 ps-md-5'>
            { authorInfo && <div className='author-info mb-4'>
                <img src={authorAvatarLink} alt={authorInfo.name} className='author-avatar' />
                <div className='ms-4'>
                    <div className='author-name mb-1'>
                        {authorInfo.name} <span 
                            className='follow-button ms-2' 
                            onClick={() => window.open(authorInfo.socialMediaLink, '_blank')}
                        >
                            Follow
                        </span>
                    </div>
                    <div className='author-bio'>
                        {authorInfo.bio}
                    </div>
                </div>
            </div>}
            <ArticleComponent />
            <div className='mt-5 article-date'>
                { articleInfo.date }
            </div>
        </div>
        <div className='d-none col-md-2' />
        <div className='d-md-none share-section-mobile mt-4 text-center'>
            <hr />
            <div className='mb-4 mt-4'>Share</div>
            <span className='me-4'><i className='bi bi-twitter-x' onClick={() => window.open(xUrl)}></i></span>
            <span className='me-4'><i className='bi bi-linkedin' onClick={() => window.open(linkedinUrl)}></i></span>
            <span className='me-4'><i className='bi bi-whatsapp' onClick={() => window.open(whatsappUrl)}></i></span>
            <span className='me-4'><i className='bi bi-copy' onClick={handleCopyToClipboard}></i></span>
        </div>
    </div>
};

export default BlogArticlePageLayout;