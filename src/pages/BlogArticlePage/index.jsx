import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlogArticlePageLayout } from '../../layouts/BlogArticlePageLayout';
import blogArticleMapping from '../../services/blogArticleMapping.json';


export const BlogArticlePage = () => {

    const navigate = useNavigate();
    const { articleId } = useParams();
    const [ ArticleComponent, setArticleComponent ] = useState(null);
    const [ articleInfo, setArticleInfo ] = useState(null);

    // Display top of the page after navigation.
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    // Load requested article component; if it isn't present, throw 404 page.
    useEffect(() => {
        // Get the component name from the articleId.
        const loadComponent = async () => {
            const filename = getBlogArticleInfo(articleId).component;
            try {
                const module = await import(
                    `../../layouts/BlogArticles/${filename}`
                );
                setArticleComponent(() => module.default);
            } catch (error) {
                navigate('/404');
            }
        };

        const loadArticleInfo = async () => {
            const articleInfo = await getBlogArticleInfo(articleId);
            setArticleInfo(articleInfo);
        }

        loadArticleInfo();
        loadComponent();
    }, [ articleId, navigate ])

    return ArticleComponent && <BlogArticlePageLayout
        ArticleComponent={ArticleComponent}
        articleInfo={articleInfo}
    />
};

export default BlogArticlePageLayout;