import './index.scss';


export const BlogPostPreview = ({ title, description, date, link }) => {
    return <div 
        className='blog-post-preview'
        onClick={() => window.open(link, '_blank', 'noreferrer')}
    >
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='row'>
            <div className='col-6 text-start'>
                <span className='date'>{date}</span>
            </div>
            <div className='col-6 text-end'>
                <span className='read-more'>Read more <i className='bi bi-arrow-right'></i></span>
            </div>
        </div>
    </div>
};

export default BlogPostPreview;