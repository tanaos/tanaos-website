import blogArticleMapping from './blogArticleMapping.json'
import blogAuthors from './blogAuthors.json'


// get blog article component filename based on its article id
export const getBlogArticleInfo = ( articleId ) => {
    const articleInfo = blogArticleMapping.hasOwnProperty(articleId) ? 
        blogArticleMapping[articleId] : null;

    return articleInfo;
};

export const getBlogArticleAuthorInfo = ( articleId ) => {
    const authorId = blogArticleMapping.hasOwnProperty(articleId) ? 
        blogArticleMapping[articleId].author : null;

    if (!authorId) {
        return null;
    }

    return blogAuthors[authorId];
};