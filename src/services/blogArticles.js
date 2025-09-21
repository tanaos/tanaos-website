import blogArticleMapping from './blogArticleMapping.json'


// get blog article component filename based on its article id
export const getBlogArticleInfo = ( articleId ) => {
    const articleInfo = blogArticleMapping.hasOwnProperty(articleId) ? 
        blogArticleMapping[articleId] : null;

    return articleInfo;
};